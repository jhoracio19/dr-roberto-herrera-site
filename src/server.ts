import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Reseñas de Google (Place Details) — se cachean en memoria por 1 hora
 * para no consumir cuota de la API en cada visita al sitio.
 */
interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto: string;
}

interface ReviewsPayload {
  rating: number | null;
  totalRatings: number | null;
  reviews: GoogleReview[];
}

let reviewsCache: { data: ReviewsPayload; expiresAt: number } | null = null;
const REVIEWS_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hora

app.get('/api/reviews', async (req, res) => {
  if (reviewsCache && reviewsCache.expiresAt > Date.now()) {
    res.json(reviewsCache.data);
    return;
  }

  const apiKey = process.env['GOOGLE_PLACES_API_KEY'];
  const placeId = process.env['GOOGLE_PLACE_ID'];

  if (!apiKey || !placeId) {
    res.status(503).json({ error: 'El servicio de reseñas no está configurado.' });
    return;
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'rating,user_ratings_total,reviews');
    url.searchParams.set('language', 'es');
    url.searchParams.set('key', apiKey);

    const response = await fetch(url.toString());
    const data = (await response.json()) as {
      status: string;
      result?: {
        rating?: number;
        user_ratings_total?: number;
        reviews?: {
          author_name: string;
          rating: number;
          text: string;
          relative_time_description: string;
          profile_photo_url: string;
        }[];
      };
    };

    if (data.status !== 'OK' || !data.result) {
      res.status(502).json({ error: 'No se pudieron obtener las reseñas de Google.' });
      return;
    }

    const payload: ReviewsPayload = {
      rating: data.result.rating ?? null,
      totalRatings: data.result.user_ratings_total ?? null,
      reviews: (data.result.reviews ?? []).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        profilePhoto: r.profile_photo_url,
      })),
    };

    reviewsCache = { data: payload, expiresAt: Date.now() + REVIEWS_CACHE_TTL_MS };
    res.json(payload);
  } catch {
    res.status(500).json({ error: 'Error al consultar Google Places API.' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

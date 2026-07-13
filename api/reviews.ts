import type { VercelRequest, VercelResponse } from '@vercel/node';

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

interface PlaceDetailsResponse {
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
}

// Cache en memoria de la instancia de la función (se reinicia entre cold starts,
// pero evita llamadas repetidas a Google mientras la instancia siga "caliente").
let cache: { data: ReviewsPayload; expiresAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hora

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (cache && cache.expiresAt > Date.now()) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(cache.data);
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
    const data = (await response.json()) as PlaceDetailsResponse;

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

    cache = { data: payload, expiresAt: Date.now() + CACHE_TTL_MS };
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(payload);
  } catch {
    res.status(500).json({ error: 'Error al consultar Google Places API.' });
  }
}

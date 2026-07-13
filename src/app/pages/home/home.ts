import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageComparisonSlider } from '../../components/image-comparison-slider/image-comparison-slider';
import { FAQS } from '../../data/faqs';

const WHATSAPP_NUMBER = '522461567821';

const REVIEW_COLORS = [
  'bg-orange-500',
  'bg-gray-500',
  'bg-emerald-600',
  'bg-blue-600',
  'bg-purple-600',
];

interface GoogleReviewDto {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto: string;
}

interface ReviewsResponse {
  rating: number | null;
  totalRatings: number | null;
  reviews: GoogleReviewDto[];
}

@Component({
  selector: 'app-home',
  standalone: true, // Agregado para Angular 17+
  imports: [RouterLink, NgOptimizedImage, ImageComparisonSlider, ReactiveFormsModule],
  templateUrl: './home.html', // Verifica si es .html o .component.html
  styles: ``,
})
export class Home implements OnInit {
  // Usar convención HomeComponent
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // Inyectamos los servicios
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  // --- FORMULARIO DE CONTACTO (envía por WhatsApp) ---
  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    contacto: ['', [Validators.required, Validators.minLength(6)]],
    motivo: ['Agendar una cita', [Validators.required]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.contactForm.controls;
  }

  enviarPorWhatsapp(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, contacto, motivo, mensaje } = this.contactForm.value;
    const texto =
      `Hola Dr. Roberto, mi nombre es ${nombre}.\n` +
      `Motivo de consulta: ${motivo}\n` +
      `Cómo contactarme: ${contacto}\n` +
      `Mensaje: ${mensaje}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    this.contactForm.reset({ motivo: 'Agendar una cita' });
  }

  ngOnInit(): void {
    // Las reseñas en vivo solo se piden en el navegador: la página ya se
    // prerrenderiza en el build, así que aquí evitamos "congelar" datos
    // viejos en el HTML estático y evitamos llamadas a la API en cada build.
    if (isPlatformBrowser(this.platformId)) {
      this.cargarResenasDeGoogle();
    }

    // --- 1. SEO DE PESTAÑA Y META TAGS ---
    this.titleService.setTitle('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Dr. Roberto Herrera, especialista certificado en otorrinolaringología en Tlaxcala. Tratamientos para oídos, nariz y garganta. ¡Agenda tu cita hoy!',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Otorrino Tlaxcala, Dr Roberto Herrera, Oídos, Nariz, Garganta, Audiología, Chiautempan',
    });

    // --- 2. OPEN GRAPH (WhatsApp / Facebook) ---
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Cuidado especializado para tu Salud Auditiva. Más de 18 años de experiencia.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://otorrinotlaxcala.com/dr_roberto.webp',
    }); // URL ABSOLUTA necesaria
    this.metaService.updateTag({ property: 'og:url', content: 'https://otorrinotlaxcala.com/' });
    this.metaService.updateTag({ property: 'og:type', content: 'medical.physician' });

    // El schema.org Physician ya se define una sola vez en src/index.html (sitewide).
  }

  private cargarResenasDeGoogle(): void {
    this.http.get<ReviewsResponse>('/api/reviews').subscribe({
      next: (data) => {
        if (data.rating !== null) {
          this.googleRating.set(data.rating);
        }
        if (data.totalRatings !== null) {
          this.googleTotalRatings.set(data.totalRatings);
        }
        if (data.reviews.length > 0) {
          this.reviews.set(
            data.reviews.map((r, i) => ({
              name: r.author,
              date: r.relativeTime,
              text: r.text,
              initial: r.author.charAt(0).toUpperCase(),
              color: REVIEW_COLORS[i % REVIEW_COLORS.length],
            })),
          );
        }
      },
      error: () => {
        // Si falla (API no configurada, sin conexión, etc.) se conservan
        // las reseñas estáticas de respaldo definidas más abajo.
      },
    });
  }

  // --- RATING DE GOOGLE (se actualiza con datos en vivo si están disponibles) ---
  googleRating = signal(4.6);
  googleTotalRatings = signal(169);

  // --- DATOS DE RESEÑAS (respaldo estático, se reemplaza con datos en vivo) ---
  reviews = signal([
    {
      name: 'Ofe Flores',
      date: 'hace 3 días',
      text: 'Excelente el servicio que ofrece el Otorrinolaringólogo. Muy profesional y amable.',
      initial: 'O',
      color: 'bg-orange-500',
    },
    {
      name: 'Flor Montes',
      date: 'hace 23 días',
      text: 'La verdad es muy confiable y muy amable el doctor, te explica con detalle tu padecimiento.',
      initial: 'F',
      color: 'bg-gray-500',
    },
    {
      name: 'Lucas Bld',
      date: 'hace 1 mes',
      text: 'Excelente atención Recomendable.',
      initial: 'L',
      color: 'bg-emerald-600',
    },
    {
      name: 'Monserrat Sanchez',
      date: 'hace 2 meses',
      text: 'Excelente Doctor, muy profesional y con experiencia aclara las dudas.',
      initial: 'M',
      color: 'bg-blue-600',
    },
    {
      name: 'Monserrat Ang...',
      date: 'hace 2 meses',
      text: 'Doc. Roberto Herrera, excelente atención y buen otorrinolaringólogo.',
      initial: 'M',
      color: 'bg-purple-600',
    },
  ]);

  caso1AntesStyle = { 'object-position': 'center 38%' };
  caso1DespuesStyle = { 'object-position': 'center 46%', 'transform': 'scale(1.09) translateX(-1%)' };

  // --- PREVIEW DE PREGUNTAS FRECUENTES ---
  faqsPreview = FAQS.slice(0, 4);
  openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update((current) => (current === index ? null : index));
  }
}

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Breadcrumbs, BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { JsonLd } from '../../services/json-ld';
import { DETALLES, DetallePagina } from '../../data/detalles';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink, Breadcrumbs],
  templateUrl: './detalle.html',
  styles: ``,
})
export class Detalle implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly jsonLd = inject(JsonLd);
  private readonly domain = 'https://otorrinotlaxcala.com';
  private static readonly SCHEMA_ID = 'detalle-schema';
  private static readonly FAQ_SCHEMA_ID = 'detalle-faq-schema';

  detalle?: DetallePagina;
  introParrafos: string[] = [];
  breadcrumbItems: BreadcrumbItem[] = [];
  whatsappUrl = '';

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['slug'] as string;
    const detalle = DETALLES.find((d) => d.slug === slug);

    if (!detalle) {
      return;
    }

    this.detalle = detalle;
    this.introParrafos = detalle.intro.split('\n\n');
    this.whatsappUrl = `https://wa.me/522461567821?text=${encodeURIComponent(detalle.whatsappMensaje)}`;

    this.breadcrumbItems = [
      { label: 'Inicio', url: '/' },
      { label: detalle.seccionLabel, url: `/${detalle.seccion}` },
      { label: detalle.nombre },
    ];

    const url = `${this.domain}/${detalle.seccion}/${detalle.slug}`;

    this.title.setTitle(detalle.titleTag);
    this.meta.updateTag({ name: 'description', content: detalle.metaDescription });
    this.meta.updateTag({ property: 'og:title', content: detalle.titleTag });
    this.meta.updateTag({ property: 'og:description', content: detalle.metaDescription });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });

    this.jsonLd.setSchema(Detalle.SCHEMA_ID, {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: detalle.h1,
      description: detalle.metaDescription,
      inLanguage: 'es-MX',
      about: {
        '@type': detalle.tipo === 'procedimiento' ? 'MedicalProcedure' : 'MedicalCondition',
        name: detalle.nombre,
        description: this.introParrafos[0],
      },
      provider: { '@id': 'https://otorrinotlaxcala.com/#physician' },
    });

    this.jsonLd.setSchema(Detalle.FAQ_SCHEMA_ID, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: detalle.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.pregunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.respuesta,
        },
      })),
    });
  }

  ngOnDestroy(): void {
    this.jsonLd.removeSchema(Detalle.SCHEMA_ID);
    this.jsonLd.removeSchema(Detalle.FAQ_SCHEMA_ID);
  }
}

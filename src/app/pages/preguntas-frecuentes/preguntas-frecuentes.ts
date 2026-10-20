import { Component, DOCUMENT, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FAQS } from '../../data/faqs';
import { Breadcrumbs, BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-preguntas-frecuentes',
  imports: [Breadcrumbs],
  templateUrl: './preguntas-frecuentes.html',
})
export class PreguntasFrecuentes implements OnInit, OnDestroy {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Preguntas Frecuentes' },
  ];

  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  faqs = FAQS;

  ngOnInit(): void {
    this.title.setTitle('Preguntas Frecuentes | Otorrino en Tlaxcala | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Resolvemos las dudas más comunes sobre citas, cirugías, anestesia, tiempos de recuperación y procedimientos estéticos con el Dr. Roberto Herrera en Tlaxcala.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Preguntas Frecuentes | Dr. Roberto Herrera',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Resolvemos las dudas más comunes sobre citas, cirugías, anestesia y tiempos de recuperación.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://otorrinotlaxcala.com/preguntas-frecuentes',
    });

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.pregunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.respuesta,
        },
      })),
    };

    if (!this.document.getElementById('faq-schema')) {
      const script = this.document.createElement('script');
      script.id = 'faq-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  ngOnDestroy(): void {
    this.document.getElementById('faq-schema')?.remove();
  }
}

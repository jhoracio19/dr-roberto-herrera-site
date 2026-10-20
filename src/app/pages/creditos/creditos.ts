import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-creditos',
  imports: [],
  templateUrl: './creditos.html',
})
export class Creditos {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Créditos de Imágenes | Dr. Roberto Herrera');

    // 🛑 IMPORTANTE: Esto le dice a Google:
    // "No indexes esta página en el buscador, pero sí sigue estos enlaces".
    // Así cumples la ley sin perder autoridad SEO.
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    this.meta.updateTag({
      name: 'description',
      content:
        'Créditos y atribuciones de las imágenes utilizadas en el sitio del Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala.',
    });
  }
}

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
    // "No indexes esta página en el buscador y no sigas estos enlaces".
    // Así cumples la ley sin perder autoridad SEO.
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}

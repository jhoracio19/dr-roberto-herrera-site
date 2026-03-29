import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p class="text-6xl font-bold text-blue-600 mb-4">404</p>
      <h1 class="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h1>
      <p class="text-gray-500 mb-8">La dirección que buscas no existe o fue movida.</p>
      <a
        routerLink="/"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  `,
})
export class NotFound {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    this.title.setTitle('Página no encontrada | Dr. Roberto Herrera');
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}

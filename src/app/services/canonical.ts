import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class Canonical {
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  updateCanonicalUrl(url?: string) {
    // 1. Buscamos si ya existe la etiqueta <link rel="canonical">
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null!;

    // 2. Si no existe, la creamos
    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }

    // 3. Definimos la etiqueta como 'canonical'
    element.setAttribute('rel', 'canonical');

    // 4. Establecemos la URL. Si no nos pasan una, usamos la actual del navegador.
    // IMPORTANTE: Aquí forzamos que sea la versión "limpia" (sin parámetros raros)
    element.setAttribute('href', url ? url : window.location.origin + window.location.pathname);
  }
}

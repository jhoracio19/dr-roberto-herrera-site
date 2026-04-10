import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Canonical {
  private readonly domain = 'https://otorrinotlaxcala.com';

  constructor(@Inject(DOCUMENT) private dom: Document) {}

  updateCanonicalUrl(url?: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null!;

    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }

    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url ? url : this.domain + this.dom.location.pathname);
  }
}

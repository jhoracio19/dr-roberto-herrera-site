import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class JsonLd {
  private readonly dom = inject(DOCUMENT);

  setSchema(id: string, schema: object): void {
    let script = this.dom.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.dom.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.dom.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }

  removeSchema(id: string): void {
    const script = this.dom.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}

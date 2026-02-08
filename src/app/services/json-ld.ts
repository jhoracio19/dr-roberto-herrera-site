import { DOCUMENT, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonLd {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  insertSchema(schema: any) {
    let script = this._document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this._document.head.appendChild(script);
  }
}

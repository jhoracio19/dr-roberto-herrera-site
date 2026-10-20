import { Component, Input, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JsonLd } from '../../../services/json-ld';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styles: ``,
})
export class Breadcrumbs implements OnDestroy {
  private readonly jsonLd = inject(JsonLd);
  private readonly dom = inject(DOCUMENT);
  private readonly domain = 'https://otorrinotlaxcala.com';
  private static readonly SCHEMA_ID = 'breadcrumb-schema';

  @Input() theme: 'light' | 'dark' = 'light';

  private _items: BreadcrumbItem[] = [];

  @Input()
  set items(value: BreadcrumbItem[]) {
    this._items = value ?? [];
    this.actualizarSchema();
  }
  get items(): BreadcrumbItem[] {
    return this._items;
  }

  private actualizarSchema(): void {
    if (!this._items.length) {
      this.jsonLd.removeSchema(Breadcrumbs.SCHEMA_ID);
      return;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: this._items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: this.domain + (item.url ?? this.dom.location.pathname),
      })),
    };

    this.jsonLd.setSchema(Breadcrumbs.SCHEMA_ID, schema);
  }

  ngOnDestroy(): void {
    this.jsonLd.removeSchema(Breadcrumbs.SCHEMA_ID);
  }
}

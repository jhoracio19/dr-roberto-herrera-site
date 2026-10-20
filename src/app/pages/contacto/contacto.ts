import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Breadcrumbs, BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink, Breadcrumbs],
  templateUrl: './contacto.html',
})
export class Contacto implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [{ label: 'Inicio', url: '/' }, { label: 'Contacto' }];

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contacto | Dr. Roberto Herrera — Otorrinolaringólogo en Tlaxcala');
    this.meta.updateTag({
      name: 'description',
      content:
        'Agenda tu cita con el Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala. Consultorio en G. Valle 18, Centro, 90000 Tlaxcala de Xicohténcatl. Teléfono y WhatsApp +52 (246) 156 7821.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contacto | Dr. Roberto Herrera — Otorrinolaringólogo en Tlaxcala',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Agenda tu cita por WhatsApp, teléfono o correo. Consultorio en G. Valle 18, Centro, Tlaxcala de Xicohténcatl.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://otorrinotlaxcala.com/contacto',
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}

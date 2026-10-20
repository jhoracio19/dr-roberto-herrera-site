import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { getAniosExperiencia } from '../../data/experiencia';
import { Breadcrumbs, BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-sobre-el-doctor',
  imports: [NgOptimizedImage, Breadcrumbs],
  templateUrl: './sobre-el-doctor.html',
  styles: ``,
})
export class SobreElDoctor {
  aniosExperiencia = getAniosExperiencia();

  breadcrumbItems: BreadcrumbItem[] = [{ label: 'Inicio', url: '/' }, { label: 'Sobre el Doctor' }];

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Sobre el Doctor | Dr. Roberto Herrera — Otorrinolaringólogo en Tlaxcala',
    );
    this.meta.updateTag({
      name: 'description',
      content: `Conoce al Dr. Roberto Herrera, otorrinolaringólogo certificado en Tlaxcala con más de ${this.aniosExperiencia} años de experiencia: formación en la BUAP y la Universidad de Guanajuato, diplomados en la UNAM, cédulas profesionales y certificaciones.`,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Sobre el Doctor | Dr. Roberto Herrera — Otorrinolaringólogo en Tlaxcala',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: `Trayectoria, formación académica, cédulas y certificaciones del Dr. Roberto Herrera, otorrinolaringólogo en Tlaxcala con más de ${this.aniosExperiencia} años de experiencia.`,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://otorrinotlaxcala.com/sobre-el-doctor',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://otorrinotlaxcala.com/dr_roberto.webp',
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}

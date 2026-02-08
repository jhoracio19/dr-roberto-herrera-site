import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  // Inyectamos los servicios de SEO
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    // 1. Título de la Pestaña (Vital para el clic en Google)
    this.titleService.setTitle('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');

    // 2. Meta Descripción (Lo que sale gris abajo del link en Google)
    this.metaService.updateTag({
      name: 'description',
      content:
        'Dr. Roberto Herrera, especialista certificado en otorrinolaringología en Tlaxcala. Tratamientos para oídos, nariz y garganta. ¡Agenda tu cita hoy!',
    });

    // 3. Keywords (Opcional, pero ayuda)
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Otorrino Tlaxcala, Dr Roberto Herrera, Oídos, Nariz, Garganta, Audiología',
    });

    // 4. Open Graph (Para que se vea bonita la tarjeta al compartir en WhatsApp/Facebook)
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Cuidado especializado para tu Salud Auditiva. Más de 18 años de experiencia.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      // TODO: cambiar la url por el dominio
      content: 'https://otorrinotlaxcala.com/dr_roberto.jpg',
    }); // <--- Cambiar URL cuando subas la web
  }
  // Datos reales copiados de tu captura
  reviews = [
    {
      name: 'Ofe Flores',
      date: 'hace 3 días',
      text: 'Excelente el servicio que ofrece el Otorrinolaringólogo. Muy profesional y amable.',
      initial: 'O',
      color: 'bg-orange-500',
    },
    {
      name: 'Flor Montes',
      date: 'hace 23 días',
      text: 'La verdad es muy confiable y muy amable el doctor, te explica con detalle tu padecimiento.',
      initial: 'F',
      color: 'bg-gray-500',
    },
    {
      name: 'Lucas Bld',
      date: 'hace 1 mes',
      text: 'Excelente atención Recomendable.',
      initial: 'L',
      color: 'bg-emerald-600',
    },
    {
      name: 'Monserrat Sanchez',
      date: 'hace 2 meses',
      text: 'Excelente Doctor, muy profesional y con experiencia aclara las dudas.',
      initial: 'M',
      color: 'bg-blue-600',
    },
    {
      name: 'Monserrat Ang...',
      date: 'hace 2 meses',
      text: 'Doc. Roberto Herrera, excelente atención y buen otorrinolaringólogo.',
      initial: 'M',
      color: 'bg-purple-600', // Variamos el color
    },
  ];
}

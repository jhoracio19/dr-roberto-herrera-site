import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

// Asegúrate que la ruta sea correcta según donde creaste el servicio
// Si lo llamaste 'json-ld.service.ts', la clase suele ser 'JsonLdService'
import { JsonLd } from '../../services/json-ld';

@Component({
  selector: 'app-home',
  standalone: true, // Agregado para Angular 17+
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './home.html', // Verifica si es .html o .component.html
  styles: ``,
})
export class Home implements OnInit {
  // Usar convención HomeComponent

  // Inyectamos los servicios
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private jsonLd: JsonLd, // Inyección del servicio de Schema
  ) {}

  ngOnInit(): void {
    // --- 1. SEO DE PESTAÑA Y META TAGS ---
    this.titleService.setTitle('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Dr. Roberto Herrera, especialista certificado en otorrinolaringología en Tlaxcala. Tratamientos para oídos, nariz y garganta. ¡Agenda tu cita hoy!',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Otorrino Tlaxcala, Dr Roberto Herrera, Oídos, Nariz, Garganta, Audiología, Chiautempan',
    });

    // --- 2. OPEN GRAPH (WhatsApp / Facebook) ---
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
      content: 'https://otorrinotlaxcala.com/dr_roberto.jpg',
    }); // URL ABSOLUTA necesaria
    this.metaService.updateTag({ property: 'og:url', content: 'https://otorrinotlaxcala.com/' });
    this.metaService.updateTag({ property: 'og:type', content: 'medical.physician' });

    // --- 3. SCHEMA MARKUP (JSON-LD) - ¡LO QUE FALTABA! ---
    // Este objeto le dice a Google Maps y al Buscador quién es el doctor
    const schemaDoctor = {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Roberto Herrera',
      image: 'https://otorrinotlaxcala.com/dr_roberto.jpg',
      description: 'Especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello.',
      medicalSpecialty: 'Otolaryngologist',
      telephone: '+522461567821',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'G. Valle 18, Centro', // ¡PON LA DIRECCIÓN REAL DE TLAXCALA!
        addressLocality: 'Tlaxcala de Xicohténcatl',
        addressRegion: 'Tlax',
        postalCode: '90000',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.32603386167681',
        longitude: '-98.22713470213061',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '14:00',
        },
      ],
      priceRange: '$$$',
    };

    // Inyectamos el script invisible en el head
    this.jsonLd.insertSchema(schemaDoctor);
  }

  // --- DATOS DE RESEÑAS ---
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
      color: 'bg-purple-600',
    },
  ];
}

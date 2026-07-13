import { Component, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageComparisonSlider } from '../../components/image-comparison-slider/image-comparison-slider';

const WHATSAPP_NUMBER = '522461567821';

@Component({
  selector: 'app-home',
  standalone: true, // Agregado para Angular 17+
  imports: [RouterLink, NgOptimizedImage, ImageComparisonSlider, ReactiveFormsModule],
  templateUrl: './home.html', // Verifica si es .html o .component.html
  styles: ``,
})
export class Home implements OnInit {
  // Usar convención HomeComponent
  private fb = inject(FormBuilder);

  // Inyectamos los servicios
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  // --- FORMULARIO DE CONTACTO (envía por WhatsApp) ---
  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    contacto: ['', [Validators.required, Validators.minLength(6)]],
    motivo: ['Agendar una cita', [Validators.required]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.contactForm.controls;
  }

  enviarPorWhatsapp(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, contacto, motivo, mensaje } = this.contactForm.value;
    const texto =
      `Hola Dr. Roberto, mi nombre es ${nombre}.\n` +
      `Motivo de consulta: ${motivo}\n` +
      `Cómo contactarme: ${contacto}\n` +
      `Mensaje: ${mensaje}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    this.contactForm.reset({ motivo: 'Agendar una cita' });
  }

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
      content: 'https://otorrinotlaxcala.com/dr_roberto.webp',
    }); // URL ABSOLUTA necesaria
    this.metaService.updateTag({ property: 'og:url', content: 'https://otorrinotlaxcala.com/' });
    this.metaService.updateTag({ property: 'og:type', content: 'medical.physician' });

    // El schema.org Physician ya se define una sola vez en src/index.html (sitewide).
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

  caso1AntesStyle = { 'object-position': 'center 38%' };
  caso1DespuesStyle = { 'object-position': 'center 46%', 'transform': 'scale(1.09) translateX(-1%)' };
}

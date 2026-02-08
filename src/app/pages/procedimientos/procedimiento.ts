import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface ProcedimientoEstetico {
  titulo: string;
  descripcion: string;
  beneficioDestacado: string; // El texto en la cajita rosa
  duracion: string;
  recuperacion: string;
  resultados: string;
  imagen: string;
}

@Component({
  selector: 'app-procedimientos',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './procedimientos.html',
  styles: ``,
})
export class Procedimientos implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cirugías Estéticas Faciales | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Rinoplastia, Otoplastia, Mentoplastia y más. Procedimientos estéticos faciales seguros.',
    });
  }

  procedimientos: ProcedimientoEstetico[] = [
    {
      titulo: 'Rinoplastia',
      descripcion:
        'Cirugía para mejorar la forma, tamaño y proporción de la nariz. También puede ayudar con problemas respiratorios.',
      beneficioDestacado:
        'Mejora la armonía facial, corrige defectos congénitos o traumáticos, puede mejorar la respiración.',
      duracion: '2-3 horas',
      recuperacion: '2-3 semanas',
      resultados: 'Definitivos en 6-12 meses',
      imagen: 'assets/images/esteticos/rinoplastia.webp',
    },
    {
      titulo: 'Otoplastia',
      descripcion:
        'Corrige orejas prominentes o asimétricas modificando forma y posición. Ideal para simetría facial.',
      beneficioDestacado: 'Mejora la autoestima, logra simetría facial.',
      duracion: '1-2 horas',
      recuperacion: '1-2 semanas',
      resultados: 'Inmediatos y permanentes',
      imagen: 'assets/images/esteticos/otoplastia2.webp',
    },
    {
      titulo: 'Mentoplastia',
      descripcion:
        'Mejora el contorno del mentón, puede implicar implantes o reducción ósea para armonía facial.',
      beneficioDestacado: 'Mejora el perfil facial, armoniza mandíbula y nariz.',
      duracion: '1-2 horas',
      recuperacion: '1-2 semanas',
      resultados: 'Definitivos en 2-3 meses',
      imagen: 'assets/images/esteticos/mentoplastia.webp',
    },
    {
      titulo: 'Blefaroplastia',
      descripcion:
        'Cirugía estética de párpados para eliminar exceso de piel o grasa. Rejuvenece la mirada.',
      beneficioDestacado: 'Rejuvenece la apariencia, mejora visión en algunos casos.',
      duracion: '1-2 horas',
      recuperacion: '1 semana',
      resultados: 'Visibles en 2-4 semanas',
      imagen: 'assets/images/esteticos/blefaroplastia.webp',
    },
  ];
  // ... (Debajo del array 'procedimientos' que ya tienes)

  noQuirurgicos: ProcedimientoEstetico[] = [
    {
      titulo: 'Botox',
      descripcion: 'Relaja músculos faciales para suavizar líneas de expresión.',
      beneficioDestacado: 'Resultados rápidos y sin cirugía.',
      duracion: '15-30 minutos',
      recuperacion: 'Inmediata',
      resultados: 'Temporales (3-6 meses)',
      imagen: 'assets/images/esteticos/botox.webp',
    },
    {
      titulo: 'Ácido Hialurónico',
      descripcion: 'Rellenos dérmicos para volumen en labios, pómulos o arrugas.',
      beneficioDestacado: 'Efecto natural, mejora contornos faciales.',
      duracion: '30-45 minutos',
      recuperacion: '1-2 días',
      resultados: '6-12 meses',
      imagen: 'assets/images/esteticos/acido.webp',
    },
    {
      titulo: 'Hilos Tensores',
      descripcion: 'Técnica para tensar y elevar tejidos faciales sin cirugía.',
      beneficioDestacado: 'Reafirma, rejuvenece sin incisiones.',
      duracion: '45-60 minutos',
      recuperacion: '2-5 días',
      resultados: '12-18 meses',
      imagen: 'assets/images/esteticos/hilos.webp',
    },
    {
      titulo: 'Plasma Rico en Plaquetas (PRP)',
      descripcion: 'Tratamiento regenerativo que usa tu propia sangre para rejuvenecer.',
      beneficioDestacado: 'Mejora textura, firmeza y luminosidad.',
      duracion: '30-45 minutos',
      recuperacion: '1-2 días',
      resultados: 'Progresivos (4-6 semanas)',
      imagen: 'assets/images/esteticos/plasma.webp',
    },
  ];
}

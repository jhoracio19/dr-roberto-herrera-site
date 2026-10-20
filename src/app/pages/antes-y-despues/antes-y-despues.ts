import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ImageComparisonSlider } from '../../components/image-comparison-slider/image-comparison-slider';
import { Breadcrumbs, BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';

interface CasoClinico {
  titulo: string;
  descripcion: string;
  antes: string;
  despues: string;
  antesStyle?: { [key: string]: any };
  despuesStyle?: { [key: string]: any };
}

@Component({
  selector: 'app-antes-y-despues',
  standalone: true,
  imports: [ImageComparisonSlider, RouterLink, Breadcrumbs],
  templateUrl: './antes-y-despues.html',
  styles: ``,
})
export class AntesYDespues implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Antes y Después' },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Rinoplastias Antes y Después en Tlaxcala | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Galería de resultados reales de cirugía de nariz (rinoplastia) del Dr. Roberto Herrera. Descubre la armonía facial lograda con técnicas seguras y avanzadas.',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Rinoplastias Antes y Después | Dr. Roberto Herrera',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Galería de resultados reales de cirugía de nariz (rinoplastia) del Dr. Roberto Herrera.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://otorrinotlaxcala.com/assets/images/antes-despues/rino_1_despues.webp',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://otorrinotlaxcala.com/antes-y-despues',
    });
  }

  casosAntesDespues: CasoClinico[] = [
    {
      titulo: 'Rinoplastia - Caso 1 (Masculino)',
      descripcion: 'Corrección de giba dorsal y definición del ángulo de la punta nasal, logrando un perfil masculino recto, equilibrado y con excelente función respiratoria.',
      antes: 'assets/images/antes-despues/rino_1_antes.webp',
      despues: 'assets/images/antes-despues/rino_1_despues.webp',
      antesStyle: { 'object-position': 'center 38%' },
      despuesStyle: { 'object-position': 'center 46%', 'transform': 'scale(1.09) translateX(-1%)' }
    },
    {
      titulo: 'Rinoplastia - Caso 2 (Femenino)',
      descripcion: 'Reducción de giba ósea y perfilamiento de punta nasal, logrando una transición suave de la frente al dorso nasal y un aspecto completamente natural y armónico.',
      antes: 'assets/images/antes-despues/rino_2_antes.webp',
      despues: 'assets/images/antes-despues/rino_2_despues.webp',
      antesStyle: { 'object-position': 'center 40%' },
      despuesStyle: { 'object-position': 'center 47%', 'transform': 'scale(1.05) translateX(-1%)' }
    },
    {
      titulo: 'Rinoplastia - Caso 3 (Femenino) · Vista frontal',
      descripcion: 'Refinamiento de dorso y punta nasal con enfoque en la simetría frontal, logrando una nariz más delgada y definida que armoniza con los rasgos faciales.',
      antes: 'assets/images/antes-despues/rino_3_antes.webp',
      despues: 'assets/images/antes-despues/rino_3_despues.webp',
      antesStyle: { 'object-position': 'center 62%' },
      despuesStyle: { 'object-position': 'center 52%' }
    },
    {
      titulo: 'Rinoplastia - Caso 3 (Femenino) · Vista ¾ izquierda',
      descripcion: 'En la vista de tres cuartos se aprecia la corrección del dorso y la nueva proyección de la punta nasal, con una transición natural entre frente, nariz y labio.',
      antes: 'assets/images/antes-despues/rino_4_antes.webp',
      despues: 'assets/images/antes-despues/rino_4_despues.webp',
      antesStyle: { 'object-position': 'center 58%' },
      despuesStyle: { 'object-position': 'center 58%' }
    },
    {
      titulo: 'Rinoplastia - Caso 3 (Femenino) · Vista ¾ derecha',
      descripcion: 'El lado derecho confirma la simetría del resultado: dorso recto, punta definida y un perfil equilibrado conservando la identidad facial de la paciente.',
      antes: 'assets/images/antes-despues/rino_5_antes.webp',
      despues: 'assets/images/antes-despues/rino_5_despues.webp',
      antesStyle: { 'object-position': 'center 55%' },
      despuesStyle: { 'object-position': 'center 55%' }
    },
    {
      titulo: 'Rinoplastia - Caso 4 (Femenino) · Vista ¾',
      descripcion: 'Reducción de giba y refinamiento de la punta nasal que suavizan la expresión del rostro, con un resultado natural y proporcionado a sus facciones.',
      antes: 'assets/images/antes-despues/rino_6_antes.webp',
      despues: 'assets/images/antes-despues/rino_6_despues.webp',
      antesStyle: { 'object-position': 'center 60%' },
      despuesStyle: { 'object-position': 'center 60%' }
    },
    {
      titulo: 'Rinoplastia - Caso 4 (Femenino) · Perfil izquierdo',
      descripcion: 'El perfil izquierdo muestra la corrección de la giba dorsal y la elevación de la punta, logrando una línea nasal suave y femenina con buena función respiratoria.',
      antes: 'assets/images/antes-despues/rino_7_antes.webp',
      despues: 'assets/images/antes-despues/rino_7_despues.webp',
      antesStyle: { 'object-position': 'center 56%' },
      despuesStyle: { 'object-position': 'center 56%' }
    },
    {
      titulo: 'Rinoplastia - Caso 4 (Femenino) · Perfil derecho',
      descripcion: 'En el perfil derecho se confirma un dorso rectificado y una punta nasal mejor proyectada, con una transición armónica hacia el labio superior y el mentón.',
      antes: 'assets/images/antes-despues/rino_8_antes.webp',
      despues: 'assets/images/antes-despues/rino_8_despues.webp',
      antesStyle: { 'object-position': 'center 53%' },
      despuesStyle: { 'object-position': 'center 50%' }
    }
  ];
}

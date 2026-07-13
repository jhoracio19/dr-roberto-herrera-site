import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ImageComparisonSlider } from '../../components/image-comparison-slider/image-comparison-slider';

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
  imports: [ImageComparisonSlider],
  templateUrl: './antes-y-despues.html',
  styles: ``,
})
export class AntesYDespues implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Rinoplastias Antes y Después | Dr. Roberto Herrera');
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
    }
  ];
}

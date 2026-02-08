import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

// Definimos la estructura exacta de tus tarjetas
interface Cirugia {
  titulo: string;
  descripcion: string;
  funcion: string; // El texto dentro de la cajita azul
  duracion: string;
  recuperacion: string;
  anestesia: string;
  imagen: string;
}

@Component({
  selector: 'app-cirugias',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './cirugias.html',
  styles: ``,
})
export class Cirugias {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cirugías Médicas Especializadas | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Procedimientos quirúrgicos modernos y seguros para padecimientos de oído, nariz y garganta.',
    });
  }

  cirugias: Cirugia[] = [
    {
      titulo: 'Cirugía de Amígdalas (Amigdalectomía)',
      descripcion:
        'Extirpación quirúrgica de las amígdalas cuando están crónicamente infectadas o causan obstrucción respiratoria. Se realiza bajo anestesia general.',
      funcion: 'Eliminar infecciones recurrentes y mejorar la respiración y deglución.',
      duracion: '30-45 minutos',
      recuperacion: '7-14 días',
      anestesia: 'General',
      imagen: 'assets/images/cirugias/cirugia-amigdalas.webp',
    },
    {
      titulo: 'Cirugía de Uvulectomía',
      descripcion:
        'Extirpación parcial o total de la úvula para tratar problemas como el ronquido crónico o apnea obstructiva del sueño leve.',
      funcion: 'Disminuir el ronquido y mejorar el paso del aire por la garganta.',
      duracion: '20-30 minutos',
      recuperacion: '5-10 días',
      anestesia: 'Local o General',
      imagen: 'assets/images/cirugias/cirugia-uvulectomia.webp',
    },
    {
      titulo: 'Turbinoplastia',
      descripcion:
        'Procedimiento para reducir el tamaño de los cornetes nasales y así mejorar el flujo de aire por la nariz.',
      funcion: 'Mejorar la respiración nasal y reducir la congestión crónica.',
      duracion: '20-30 minutos',
      recuperacion: '3-7 días',
      anestesia: 'General o Local',
      imagen: 'assets/images/cirugias/turbinoplastia.webp',
    },
    {
      titulo: 'Septumplastía',
      descripcion:
        'Cirugía para corregir el tabique nasal desviado, facilitando una respiración nasal adecuada.',
      funcion: 'Mejorar el flujo de aire nasal y reducir síntomas respiratorios.',
      duracion: '40-60 minutos',
      recuperacion: '7-10 días',
      anestesia: 'General',
      imagen: 'assets/images/cirugias/septumplastia.webp',
    },
    {
      titulo: 'Rinoseptumplastía',
      descripcion:
        'Combinación de septumplastía y rinoplastía para corregir el tabique y modificar la estructura estética de la nariz.',
      funcion: 'Mejorar la respiración nasal y la apariencia estética de la nariz.',
      duracion: '90-120 minutos',
      recuperacion: '10-15 días',
      anestesia: 'General',
      imagen: 'assets/images/cirugias/rinoseptumplastia.webp',
    },
    {
      titulo: 'Bichectomía',
      descripcion:
        'Extracción de las bolsas de Bichat para afinar el rostro y definir los pómulos.',
      funcion: 'Estética facial: dar mayor definición al rostro.',
      duracion: '30-45 minutos',
      recuperacion: '3-5 días',
      anestesia: 'Local',
      imagen: 'assets/images/cirugias/bichectomia.webp',
    },
    // ... (Después de Bichectomía)

    {
      titulo: 'Otoplastia',
      descripcion: 'Cirugía estética para corregir la forma o posición de las orejas prominentes.',
      funcion:
        'Mejorar la estética de las orejas, especialmente en pacientes con orejas prominentes.',
      duracion: '1-2 horas',
      recuperacion: '7-10 días',
      anestesia: 'Local o General',
      imagen: 'assets/images/cirugias/otoplastia.webp',
    },
    {
      titulo: 'Liposucción de cuello',
      descripcion:
        'Procedimiento estético para eliminar grasa acumulada en el área submental y cuello.',
      funcion: 'Mejorar el contorno facial y definir la mandíbula.',
      duracion: '30-60 minutos',
      recuperacion: '5-10 días',
      anestesia: 'Local',
      imagen: 'assets/images/cirugias/liposuccion.webp',
    },
  ];
}

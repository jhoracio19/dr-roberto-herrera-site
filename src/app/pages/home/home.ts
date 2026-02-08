import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
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

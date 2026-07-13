import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aviso-privacidad',
  imports: [],
  templateUrl: './aviso-privacidad.html',
})
export class AvisoPrivacidad implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Aviso de Privacidad | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Aviso de privacidad del consultorio del Dr. Roberto Herrera, Otorrinolaringólogo en Tlaxcala.',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terminos-condiciones',
  imports: [RouterLink],
  templateUrl: './terminos-condiciones.html',
})
export class TerminosCondiciones implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Términos y Condiciones | Dr. Roberto Herrera');
    this.meta.updateTag({
      name: 'description',
      content:
        'Términos y condiciones de uso del sitio web del Dr. Roberto Herrera, Otorrinolaringólogo en Tlaxcala.',
    });
  }
}

import { Component, inject, OnInit, signal } from '@angular/core'; // 1. Agregamos OnInit
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser'; // 2. Importamos herramientas SEO
import { Footer } from './shared/ui/footer/footer';
import { Navbar } from './shared/ui/navbar/navbar';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';
import { filter } from 'rxjs';
import { Canonical } from './services/canonical';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, FloatingWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  // 3. Implementamos la interfaz
  protected readonly title = signal('web-otorrino');

  // Inyección de dependencias
  private router = inject(Router);
  private canonicalService = inject(Canonical);
  private titleService = inject(Title); // Para cambiar el título de la pestaña
  private metaService = inject(Meta); // Para la descripción en Google

  ngOnInit(): void {
    // --- ESTRATEGIA SEO: PALABRA CLAVE "OTORRINOLARINGÓLOGO" ---
    // Esto cambia lo que se ve en la pestaña del navegador y en el link azul de Google.
    this.titleService.setTitle('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');

    // Esto mejora tu CTR (la descripción gris en Google)
    this.metaService.updateTag({
      name: 'description',
      content:
        'Agenda consulta con el Dr. Roberto Herrera, especialista en Otorrinolaringología en Tlaxcala. Expertos en cirugía de nariz, oído y garganta.',
    });

    // --- ESTRATEGIA TÉCNICA: CANONICAL ---
    // Ejecutar al inicio para la primera carga
    this.canonicalService.updateCanonicalUrl();

    // Suscribirse a cambios de ruta para mantenerlo actualizado
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.canonicalService.updateCanonicalUrl();
    });
  }
}

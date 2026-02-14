import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
export class App {
  protected readonly title = signal('web-otorrino');

  // 6. Inyección de dependencias (Estilo moderno Angular 17+)
  private router = inject(Router);
  private canonicalService = inject(Canonical);

  ngOnInit(): void {
    // 7. Lógica mágica: Cada vez que cambias de página, actualizamos la etiqueta canónica
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.canonicalService.updateCanonicalUrl();
    });
  }
}

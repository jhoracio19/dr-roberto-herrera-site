import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Footer } from './shared/ui/footer/footer';
import { Navbar } from './shared/ui/navbar/navbar';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';
import { filter } from 'rxjs';
import { Canonical } from './services/canonical';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject as injectAnalytics } from '@vercel/analytics'; // 👈 agrega esto

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, FloatingWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private canonicalService = inject(Canonical);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      injectSpeedInsights();
      injectAnalytics(); // 👈 agrega esto
    }

    this.titleService.setTitle('Otorrinolaringólogo en Tlaxcala | Dr. Roberto Herrera');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Agenda consulta con el Dr. Roberto Herrera, especialista en Otorrinolaringología en Tlaxcala. Expertos en cirugía de nariz, oído y garganta.',
    });

    this.canonicalService.updateCanonicalUrl();

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.canonicalService.updateCanonicalUrl();
    });
  }
}

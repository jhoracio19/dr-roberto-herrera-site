import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/ui/footer/footer';
import { Navbar } from './shared/ui/navbar/navbar';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, FloatingWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web-otorrino');
}

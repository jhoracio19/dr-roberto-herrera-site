import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  // Signal para el estado del menú móvil
  isMenuOpen = signal(false);

  // Acción para abrir/cerrar
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  // Acción para cerrar cuando se hace click en un enlace
  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

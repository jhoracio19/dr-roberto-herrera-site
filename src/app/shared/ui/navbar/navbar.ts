import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  private elementRef = inject(ElementRef);

  // Signal para el estado del menú móvil
  isMenuOpen = signal(false);
  // Signal para el estado del submenú de servicios en móvil
  isMobileServicesOpen = signal(false);
  // Signal para el dropdown de Servicios en desktop (click y hover)
  isServicesOpen = signal(false);

  // Acción para abrir/cerrar
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  // Acción para abrir/cerrar submenú de servicios en móvil
  toggleMobileServices() {
    this.isMobileServicesOpen.update((value) => !value);
  }

  // Dropdown de Servicios (desktop): click abre (útil en touch/tablet sin hover),
  // el mouseleave del contenedor lo cierra en mouse; un click en la misma zona
  // mientras ya está abierto por hover no debe cerrarlo, por eso solo "abre".
  openServicesMenu() {
    this.isServicesOpen.set(true);
  }

  closeServicesMenu() {
    this.isServicesOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isServicesOpen.set(false);
    }
  }

  // Acción para cerrar cuando se hace click en un enlace
  closeMenu() {
    this.isMenuOpen.set(false);
    this.isMobileServicesOpen.set(false);
    this.isServicesOpen.set(false);
  }
}

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // <--- Asegúrate de importar withInMemoryScrolling

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(), // ¡Muy bien! Manteniendo el modo Zoneless

    // Aquí es donde hacemos la magia del Router
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Al cambiar de página, vuelve arriba (Top)
        anchorScrolling: 'enabled', // Permite navegar a secciones con IDs (#servicios, #doctor)
      }),
    ),
  ],
};

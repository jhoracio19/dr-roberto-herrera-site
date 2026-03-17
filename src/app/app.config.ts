import {
  ApplicationConfig,
  APP_INITIALIZER,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // <--- Asegúrate de importar withInMemoryScrolling
import { inject } from '@vercel/analytics';

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

    // Vercel Web Analytics
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return () => inject({ mode: isDevMode() ? 'development' : 'production' });
      },
      multi: true,
    },
  ],
};

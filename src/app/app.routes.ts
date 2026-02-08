import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cirugias } from './pages/cirugias/cirugias';
import { Enfermedades } from './pages/enfermedades/enfermedades';
import { Detalle } from './pages/detalle/detalle';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home }, // Tu index.php
  { path: 'cirugias', component: Cirugias },
  { path: 'enfermedades', component: Enfermedades },

  // Rutas dinámicas (La magia de Angular)
  // Ejemplo: /cirugias/rinoplastia o /enfermedades/sinusitis
  { path: ':categoria/:slug', component: Detalle },

  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }, // Si escriben algo raro, van al home
];

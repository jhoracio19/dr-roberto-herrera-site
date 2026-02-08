import { Routes } from '@angular/router';

import { Cirugias } from './pages/cirugias/cirugias';
import { Enfermedades } from './pages/enfermedades/enfermedades';
import { Procedimientos } from './pages/procedimientos/procedimiento';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home }, // Tu index.php
  { path: 'cirugias', component: Cirugias },
  { path: 'enfermedades', component: Enfermedades },
  { path: 'esteticos', component: Procedimientos },

  { path: '**', redirectTo: '' }, // Si escriben algo raro, van al home
];

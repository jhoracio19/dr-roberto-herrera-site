import { Routes } from '@angular/router';

import { Cirugias } from './pages/cirugias/cirugias';
import { Enfermedades } from './pages/enfermedades/enfermedades';
import { Procedimientos } from './pages/procedimientos/procedimiento';
import { Home } from './pages/home/home';
import { Creditos } from './pages/creditos/creditos';
import { NotFound } from './pages/notfound/not-found';

export const routes: Routes = [
  { path: '', component: Home }, // Tu index.php
  { path: 'cirugias', component: Cirugias },
  { path: 'enfermedades', component: Enfermedades },
  { path: 'esteticos', component: Procedimientos },
  { path: 'creditos', component: Creditos },

  { path: '**', component: NotFound }, // Si escriben algo raro, van al home
];

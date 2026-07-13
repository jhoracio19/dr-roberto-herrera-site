import { Routes } from '@angular/router';

import { Cirugias } from './pages/cirugias/cirugias';
import { Enfermedades } from './pages/enfermedades/enfermedades';
import { Procedimientos } from './pages/procedimientos/procedimiento';
import { Home } from './pages/home/home';
import { Creditos } from './pages/creditos/creditos';
import { NotFound } from './pages/notfound/not-found';
import { AntesYDespues } from './pages/antes-y-despues/antes-y-despues';
import { AvisoPrivacidad } from './pages/aviso-privacidad/aviso-privacidad';
import { TerminosCondiciones } from './pages/terminos-condiciones/terminos-condiciones';
import { PreguntasFrecuentes } from './pages/preguntas-frecuentes/preguntas-frecuentes';

export const routes: Routes = [
  { path: '', component: Home }, // Tu index.php
  { path: 'cirugias', component: Cirugias },
  { path: 'enfermedades', component: Enfermedades },
  { path: 'esteticos', component: Procedimientos },
  { path: 'antes-y-despues', component: AntesYDespues },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentes },
  { path: 'creditos', component: Creditos },
  { path: 'aviso-de-privacidad', component: AvisoPrivacidad },
  { path: 'terminos-y-condiciones', component: TerminosCondiciones },

  { path: '**', component: NotFound }, // Si escriben algo raro, van al home
];

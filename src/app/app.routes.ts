import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

const loadDetalle = () => import('./pages/detalle/detalle').then((m) => m.Detalle);
const loadNotFound = () => import('./pages/notfound/not-found').then((m) => m.NotFound);

export const routes: Routes = [
  { path: '', component: Home }, // Tu index.php
  {
    path: 'cirugias',
    loadComponent: () => import('./pages/cirugias/cirugias').then((m) => m.Cirugias),
  },
  {
    path: 'enfermedades',
    loadComponent: () => import('./pages/enfermedades/enfermedades').then((m) => m.Enfermedades),
  },
  {
    path: 'esteticos',
    loadComponent: () =>
      import('./pages/procedimientos/procedimiento').then((m) => m.Procedimientos),
  },
  {
    path: 'antes-y-despues',
    loadComponent: () =>
      import('./pages/antes-y-despues/antes-y-despues').then((m) => m.AntesYDespues),
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./pages/preguntas-frecuentes/preguntas-frecuentes').then(
        (m) => m.PreguntasFrecuentes,
      ),
  },
  {
    path: 'creditos',
    loadComponent: () => import('./pages/creditos/creditos').then((m) => m.Creditos),
  },
  {
    path: 'aviso-de-privacidad',
    loadComponent: () =>
      import('./pages/aviso-privacidad/aviso-privacidad').then((m) => m.AvisoPrivacidad),
  },
  {
    path: 'terminos-y-condiciones',
    loadComponent: () =>
      import('./pages/terminos-condiciones/terminos-condiciones').then(
        (m) => m.TerminosCondiciones,
      ),
  },
  {
    path: 'sobre-el-doctor',
    loadComponent: () =>
      import('./pages/sobre-el-doctor/sobre-el-doctor').then((m) => m.SobreElDoctor),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then((m) => m.Contacto),
  },

  // Páginas de detalle (procedimientos y padecimientos)
  { path: 'esteticos/rinoplastia', loadComponent: loadDetalle, data: { slug: 'rinoplastia' } },
  { path: 'cirugias/septumplastia', loadComponent: loadDetalle, data: { slug: 'septumplastia' } },
  {
    path: 'cirugias/cirugia-de-amigdalas',
    loadComponent: loadDetalle,
    data: { slug: 'cirugia-de-amigdalas' },
  },
  {
    path: 'cirugias/cirugia-de-adenoides',
    loadComponent: loadDetalle,
    data: { slug: 'cirugia-de-adenoides' },
  },
  { path: 'enfermedades/sinusitis', loadComponent: loadDetalle, data: { slug: 'sinusitis' } },
  { path: 'enfermedades/vertigo', loadComponent: loadDetalle, data: { slug: 'vertigo' } },
  {
    path: 'enfermedades/apnea-del-sueno',
    loadComponent: loadDetalle,
    data: { slug: 'apnea-del-sueno' },
  },
  { path: 'enfermedades/otitis-media', loadComponent: loadDetalle, data: { slug: 'otitis-media' } },

  { path: '404', loadComponent: loadNotFound },

  { path: '**', loadComponent: loadNotFound }, // Si escriben algo raro, ven la página 404
];

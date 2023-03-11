import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    title: 'HomePage',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
];

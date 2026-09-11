import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    data: { anchor: 'services' },
  },
  {
    path: 'provisioning',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    data: { anchor: 'provisioning' },
  },
  {
    path: 'destinations',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    data: { anchor: 'destinations' },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    data: { anchor: 'about' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
    data: { anchor: 'contact' },
  },
  { path: '**', redirectTo: '' },
];
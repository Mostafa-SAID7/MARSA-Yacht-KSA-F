import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'services', component: HomeComponent, data: { anchor: 'services' } },
  { path: 'provisioning', component: HomeComponent, data: { anchor: 'provisioning' } },
  { path: 'destinations', component: HomeComponent, data: { anchor: 'destinations' } },
  { path: 'about', component: HomeComponent, data: { anchor: 'about' } },
  { path: 'contact', component: HomeComponent, data: { anchor: 'contact' } },
  { path: '**', redirectTo: '' },
];
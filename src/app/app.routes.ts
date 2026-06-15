import { Routes } from '@angular/router';

// Placeholder components for subpages
// In a real app, these would be imported from their respective files
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('../features/homepage/homepage').then(m => m.Homepage) },
  { path: 'gadgets', loadComponent: () => import('../features/gadgets/gadgets').then(m => m.Gadgets) },
  { path: 'realty', loadComponent: () => import('../features/realty/realty').then(m => m.Realty) },
  { path: '**', redirectTo: '/home' }
];

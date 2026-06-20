import { Routes } from '@angular/router';

// Placeholder components for subpages
// In a real app, these would be imported from their respective files
export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('../features/homepage/homepage').then(m => m.Homepage) },
  {
    path: '',
    children: [
      {
        path: 'about',
        children: [
          {
            path:'history', loadComponent:() => import('../features/about/history/history').then(m => m.History)
          },
          {
            path:'team', loadComponent: () => import('../features/about/team/team').then(m => m.Team)
          },
          {
            path: 'achievements', loadComponent:() => import('../features/about/achievements/achievements').then(m => m.Achievements)
          },
          {
            path: '',
            redirectTo: 'history',
            pathMatch: 'full'
          }
        ]
      },

    //   project routes
      {
        path: 'projects',
        children: [
          {
            path: 'mining', loadComponent: () => import('../features/projects/mining/mining').then(m => m.Mining)
          },
          {
            path: 'construction', loadComponent: () => import('../features/projects/construction/construction').then(m => m.Construction)
          },
          {
            path: 'civil-engineering', loadComponent: () => import('../features/projects/civil-engineering/civil-engineering').then(m => m.CivilEngineering)
          },
          {
            path: 'plant-hiring-sales', loadComponent: () => import('../features/projects/plant-hiring-sales/plant-hiring-sales').then(m => m.PlantHiringSales)
          },
          {
            path: '',
            redirectTo: 'mining',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {path: 'contact', loadComponent: () => import('../features/contact/contact').then(m => m.Contact)},
  { path: '**', redirectTo: '/home' },
  // LEGAL PAGES
  {
    path: 'privacy',
    loadComponent: () => import('../features/system/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy),
  },
  {
    path: 'terms',
    loadComponent: () => import('../features/system/terms/terms').then(m => m.Terms),
  },
  // {
  //   path: 'cookies',
  //   loadComponent: () => import('./features/legal/cookies/cookies.component').then(m => m.CookiesComponent),
  // },
  // 404 NOT FOUND
  {
    path: '404',
    loadComponent: () => import('../features/system/not-found-404/not-found-404').then(m => m.NotFound404),
  },
  // WILDCARD - Redirect to 404
  {
    path: '**',
    redirectTo: '404'
  }
];

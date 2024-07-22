import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'pokedex'
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.routes').then(r => r.POKEDEX_ROUTES)
  },
];

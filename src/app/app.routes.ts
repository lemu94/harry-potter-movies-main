import { Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {
    path: 'movies',
    loadComponent: () =>
      import('./movie/movie.component').then((m) => m.MovieComponent),
  },
  {
    path: 'movies/:movieId',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
];

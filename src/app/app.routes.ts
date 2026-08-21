import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then((m) => m.UsersPage),
  },
  {
    path: 'albums/:userId',
    loadComponent: () => import('./pages/albums/albums.page').then((m) => m.AlbumsPage),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  
];

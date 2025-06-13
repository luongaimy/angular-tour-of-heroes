import { Routes } from '@angular/router';
import { Page01 } from './pages/page-01/page-01';
import { Page02 } from './pages/page-02/page-02';
import { page02GuardGuard } from './page02-guard-guard';

export const routes: Routes = [
  { path: 'page01', component: Page01 },
  //{ path: 'page02', component: Page02 },
  {
    path: 'page02',
    loadComponent: () =>
      import('./pages/page-02/page-02').then((f) => f.Page02),
      canActivate: [page02GuardGuard]
  },
];

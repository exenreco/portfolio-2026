import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

export const adminRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageComponent,
  }
];

export const siteRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageComponent,
  }
];

export const blogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageComponent
  }
];

export const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'home',
    component: PageComponent
  }
];

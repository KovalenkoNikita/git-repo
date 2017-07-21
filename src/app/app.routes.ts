import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: ':gender/:namePage',
    component: ProductPageComponent
  },
  {
    path: 'men',
    redirectTo: 'men/'
  },
  {
    path: 'women',
    redirectTo: 'women/'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

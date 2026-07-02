import { Routes } from '@angular/router';
import { Blog } from './blog/blog';
import { Producto } from './producto/producto';

export const routes: Routes = [
  { path: '', component: Blog },
  { path: 'producto', component: Producto }
];

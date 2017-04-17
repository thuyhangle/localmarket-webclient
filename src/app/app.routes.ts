import { Routes } from '@angular/router';
import { TestComponent } from './controllers/test.component';
import { ProductsComponent } from './controllers/products/products.component';
import { UsersComponent } from './controllers/users/users.component';

export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
];

import { Routes } from '@angular/router';
import { TestComponent } from './controllers/test.component';
import { OrdersComponent } from './controllers/orders/orders.component';
import { TypesComponent } from './controllers/types/types.component';
import { PostsComponent } from './controllers/posts/posts.component';
import { ProductsComponent } from './controllers/products/products.component';
import { UsersComponent } from './controllers/users/users.component';

export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'types', component: TypesComponent },
];
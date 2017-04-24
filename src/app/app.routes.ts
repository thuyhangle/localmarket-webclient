import { Routes } from '@angular/router';
import { TestComponent } from './controllers/test.component';
import { OrdersComponent } from './controllers/orders/orders.component';
import { TypesComponent } from './controllers/types/types.component';
import { PostsComponent } from './controllers/posts/posts.component';
import { ProductsComponent } from './controllers/products/products.component';
import { UsersComponent } from './controllers/users/users.component';

import { MapPage } from './controllers/mapPage/mapPage';
import { BuyerPage } from './controllers/buyerPage/buyerPage';

export const routes: Routes = [
  { path: '', component: MapPage },
  { path: 'mapPage', component: MapPage },
  { path: 'buyerPage', component: BuyerPage },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'types', component: TypesComponent },
];

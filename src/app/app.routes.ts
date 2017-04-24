import { Routes } from '@angular/router';
import { TestComponent } from './controllers/test.component';
import { OrdersComponent } from './controllers/orders/orders.component';
import { TypesComponent } from './controllers/types/types.component';
import { PostsComponent } from './controllers/posts/posts.component';
import { ProductsComponent } from './controllers/products/products.component';
import { UsersComponent } from './controllers/users/users.component';
import { AccountComponent } from './controllers/accountComponent/account.component';
import { CartComponent } from './controllers/cartComponent/cart.component';
import { FarmComponent } from './controllers/farmComponent/farm.component';

import { MapPage } from './controllers/mapPage/mapPage';
import { BuyerPage } from './controllers/buyerPage/buyerPage';

export const routes: Routes = [
  { path: '', component: MapPage },
  { path: 'mapPage', component: MapPage },
  { path: 'buyerPage', component: BuyerPage,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'cart', component: CartComponent },
      { path: 'farm', component: FarmComponent }
    ]
  },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'types', component: TypesComponent },
];

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TabComponent } from './components/tab/tab';
import { TestComponent } from './controllers/test.component';

import { routes } from './app.routes';
import { OrdersComponent } from './controllers/orders/orders.component';
import { TypesComponent } from './controllers/types/types.component';
import { PostsComponent } from './controllers/posts/posts.component';
import { ProductsComponent } from './controllers/products/products.component';
import { UsersComponent } from './controllers/users/users.component';

@NgModule({
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
   ],
  declarations: [
    AppComponent,
    TabComponent,
    TestComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    TypesComponent,
    PostsComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
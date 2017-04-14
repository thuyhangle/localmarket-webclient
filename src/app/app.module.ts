import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TabComponent } from './components/tab/tab';
import { TestComponent } from './controllers/test.component';
import { ProductsComponent } from './controllers/products/products.component';

import { routes } from './app.routes';

@NgModule({
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
   ],
  declarations: [
    AppComponent,
    TabComponent,
    TestComponent,
    ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { TabComponent } from './components/tab/tab';
import { TestComponent } from './controllers/test.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: '',
        redirectTo: '/test',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    TabComponent,
    TestComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

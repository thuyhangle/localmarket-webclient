import { Routes } from '@angular/router';
import { Buyer } from './controllers/buyerPage/buyer';
import { TestComponent } from './controllers/test.component';

export const routes: Routes = [
  { path: '',       component: TestComponent },
  { path: 'buyer', component: Buyer },
];

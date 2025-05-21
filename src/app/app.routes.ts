import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'order' },
];

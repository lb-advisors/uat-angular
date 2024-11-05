import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRouteComponent } from './components/driver-route/driver-route.component';
import { HomeComponent } from './components/home/home.component';
import { OrderLinksComponent } from './components/order-links/order-links.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderExistsComponent } from './components/order-exists/order-exists.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  { path: '', redirectTo: 'order-links', pathMatch: 'full' }, // Default route to order-links
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'driver', component: DriverRouteComponent, title: 'Driver Route' },
  { path: 'order-links', component: OrderLinksComponent, title: 'Order Links' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'logout', component: LogoutComponent, title: 'Logout' },
  { path: 'products', component: ProductsComponent, title: 'Products' }, // Ensure path is 'products'
  { path: 'customer/:id/order-confirmation', component: OrderConfirmationComponent, title: 'Order Confirmation' },
  { path: 'customer/:id/order-exists', component: OrderExistsComponent, title: 'Order Exists' },
  { path: 'customer/:id/order-form', component: OrderFormComponent, title: 'Order Form' },
  { path: 'data', component: DataComponent, title: 'Data' },
  { path: '**', redirectTo: 'order-links' }, // Wildcard route to handle unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

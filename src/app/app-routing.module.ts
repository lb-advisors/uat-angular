import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRouteComponent } from './components/driver-route/driver-route.component';
import { HomeComponent } from './components/home/home.component';
import { OrderListComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderFormComponent } from './components/order-form/order-form.component'; // Adjusted import path

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    title: 'Home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'driver',
    component: DriverRouteComponent,
    title: 'Driver Route',
  },
  {
    path: 'order',
    component: OrderListComponent,
    title: 'Orders',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'logout',
    component: LogoutComponent,
    title: 'Logout',
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    title: 'Inventory',
  },
  { 
    path: 'order-form',
    component: OrderFormComponent,
    title: 'Order Form',
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
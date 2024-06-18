import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRouteComponent } from './components/driver-route/driver-route.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
    title: 'Driver route',
  },
  {
    path: 'order',
    component: OrderComponent,
    title: 'Order',
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
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

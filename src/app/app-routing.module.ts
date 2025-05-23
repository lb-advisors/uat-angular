import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Regular component imports
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
import { OrdersComponent } from './components/orders/orders.component';
import { VendorLinksComponent } from './components/preorder-links/preorder-links.component';
import { PreorderFormComponent } from './components/preorder-form/preorder-form.component';
import { ReportsComponent } from './reports/reports.component';

// Authentication & Guards
import { AuthGuard } from './guards/auth.guard';
import { PasswordRequestComponent } from './components/password-request/password-request.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

// HR Components
import { EmployeeApplicationComponent } from './components/employee-application/employee-application.component';
import { HireChecklistComponent } from './components/hire-checklist/hire-checklist.component';
import { EmploymentVerificationComponent } from './components/employment-verification/employment-verification.component';
import { WithholdingComponent } from './components/withholding/withholding.component';
import { W4FormComponent } from './components/w4-form/w4-form.component';
import { AtWillEmploymentComponent } from './components/at-will-employment/at-will-employment.component';
import { SelfIdentificationComponent } from './components/self-identification/self-identification.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home', canActivate: [AuthGuard] },
  { path: 'driver', component: DriverRouteComponent, title: "Drivers' Routes", canActivate: [AuthGuard] },
  { path: 'order-links', component: OrderLinksComponent, title: 'Order Links' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'logout', component: LogoutComponent, title: 'Logout' },
  { path: 'password-request', component: PasswordRequestComponent, title: 'Password Request' },
  { path: 'password-reset/:token', component: PasswordResetComponent, title: 'Password Reset' },
  { path: 'products', component: ProductsComponent, title: 'Products', canActivate: [AuthGuard] },
  { path: 'customer/:id/order-confirmation', component: OrderConfirmationComponent, title: 'Order Confirmation' },
  { path: 'customer/:id/order-exists', component: OrderExistsComponent, title: 'Order Exists' },
  { path: 'customer/:id/order-form', component: OrderFormComponent, title: 'Order Form' },
  { path: 'data', component: DataComponent, title: 'Data', canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, title: 'Orders', canActivate: [AuthGuard] },
  { path: 'preorder-links', component: VendorLinksComponent, title: 'Vendor Links', canActivate: [AuthGuard] },
  { path: 'preorder-form/:vendorId', component: PreorderFormComponent, title: 'Preorder Form' },
  { path: 'reports', component: ReportsComponent, title: 'Reports', canActivate: [AuthGuard] },

  // HR-related routes
  { path: 'employee-application', component: EmployeeApplicationComponent, title: 'Employee Application', canActivate: [AuthGuard] },
  { path: 'new-hire-checklist', component: HireChecklistComponent, title: 'New Hire Checklist', canActivate: [AuthGuard] },
  { path: 'employment-verification', component: EmploymentVerificationComponent, title: 'Employment Verification', canActivate: [AuthGuard] },
  { path: 'w4-form', component: W4FormComponent, title: 'W4 Form', canActivate: [AuthGuard] },
  { path: 'withholding', component: WithholdingComponent, title: 'Withholding', canActivate: [AuthGuard] },
  { path: 'at-will-employment', component: AtWillEmploymentComponent, title: 'At Will Employment', canActivate: [AuthGuard] },
  { path: 'self-identification', component: SelfIdentificationComponent, title: 'Self Identification', canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

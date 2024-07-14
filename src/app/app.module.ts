import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverRouteComponent } from './components/driver-route/driver-route.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './components/home/home.component';
import { OrderLinksComponent } from './components/order-links/order-links.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderConfirmationComponent } from './components/order-form/order-confirmation.component';
import { OrderExistsComponent } from './components/order-form/order-exists.component';

import { HttpLoggingInterceptor } from './core/interceptors/http-logging.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverRouteComponent,
    HomeComponent,
    OrderLinksComponent,
    LoginComponent,
    LogoutComponent,
    InventoryComponent,
    OrderFormComponent, // Add OrderFormComponent here
    OrderConfirmationComponent, // Add OrderConfirmationComponent here
    OrderExistsComponent, // Add OrderExistsComponent here
    ImageThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    InfiniteScrollDirective,
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggingInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AppComponent } from './app/app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { GlobalErrorHandlerService } from './app/services/global-error-handler.service';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpLoggingInterceptor } from 'src/app/interceptors/http-logging.interceptor';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { AuthService } from './app/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
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
      ModalModule.forRoot() // Removed InfiniteScrollDirective from here
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));

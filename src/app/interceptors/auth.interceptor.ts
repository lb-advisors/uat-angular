import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from AuthService
    const token = this.authService.getToken();
    console.log('Token from AuthService:', token); // Debug: Check if token is available

    // If the token exists, clone the request and add the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check if the error status is 401 (Unauthorized)
        if (error.status === 401) {
          console.warn('401 Unauthorized error caught in interceptor'); // Debug: Log 401 error
          // Redirect to the login page without clearing the token (for testing purposes)
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          // Optional: Handle forbidden errors separately if needed
          console.warn('403 Forbidden - Access Denied');
        } else {
          // Log other errors
          console.error('HTTP Error:', error);
        }
        // Pass the error to the caller
        return throwError(error);
      })
    );
  }
}

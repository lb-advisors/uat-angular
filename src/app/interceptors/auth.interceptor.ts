import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Define paths to exclude from authentication
  private excludedPaths: RegExp[] = [/order-form/]; // Matches any URL containing "order-form"

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches an excluded path
    const isExcluded = this.excludedPaths.some((pattern) => pattern.test(request.url));

    // If the request is not excluded, add the Authorization header if a token is available
    if (!isExcluded) {
      const token = this.authService.getToken();
      console.log('Token from AuthService:', token); // Debug: Check if token is available

      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Redirect to login on 401 Unauthorized errors, only if the route is not excluded
        if (error.status === 401 && !isExcluded) {
          console.warn('401 Unauthorized error caught in interceptor'); // Debug: Log 401 error
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          console.warn('403 Forbidden - Access Denied');
        } else {
          console.error('HTTP Error:', error);
        }
        return throwError(error);
      })
    );
  }
}

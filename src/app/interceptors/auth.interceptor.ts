import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Define paths to exclude from authentication
  private excludedPaths: RegExp[] = [
    /gs-fish\.com\/customer\/.*\/order-form/,    // Matches production URLs for order-form
    /gs-fish\.com\/customer\/.*\/order-exists/,  // Matches production URLs for order-exists
    /gs-fish\.com\/customer\/.*\/order-confirmation/  // Matches production URLs for order-confirmation
  ];

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches any excluded path
    const isExcluded = this.excludedPaths.some((pattern) => {
      const isMatch = pattern.test(request.url);
      console.log(`Testing ${request.url} against ${pattern}: ${isMatch}`); // Debug logging
      return isMatch;
    });

    // If the request is not excluded, add the Authorization header if a token is available
    if (!isExcluded) {
      const token = this.authService.getToken();

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
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          console.warn('403 Forbidden - Access Denied');
        }
        return throwError(error);
      })
    );
  }
}
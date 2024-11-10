
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
    /order-form/i,
    /order-exists/i,
    /order-confirmation/i
  ];

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches any excluded path
    const isExcluded = this.excludedPaths.some((pattern) => {
      const isMatch = pattern.test(request.url);
      console.log(`URL: ${request.url}, Pattern: ${pattern}, Excluded: ${isMatch}`);
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
    } else {
      console.log('Request excluded from authentication:', request.url);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !isExcluded) {
          console.warn('Unauthorized access detected. Redirecting to login.');
          this.router.navigate(['/login']);
        } else if (error.status === 401 && isExcluded) {
          console.warn('Unauthorized request to excluded path, not redirecting');
        }
        return throwError(() => error);
      })
    );
  }
}

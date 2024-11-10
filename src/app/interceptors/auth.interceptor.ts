import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Define paths to exclude from authentication
  private excludedPaths: string[] = [
    '/order-form',
    '/order-exists',
    '/order-confirmation'
  ];

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the full URL path
    const fullUrl = new URL(request.url, window.location.origin);
    const pathname = fullUrl.pathname;

    // Check if the request URL contains any excluded path
    const isExcluded = this.excludedPaths.some(path => {
      const isMatch = pathname.includes(path);
      console.log(`URL: ${pathname}, Excluded Path: ${path}, Is Excluded: ${isMatch}`);
      return isMatch;
    });

    // If the request is not excluded and we have a token, add the Authorization header
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
      console.log('Request excluded from authentication:', pathname);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !isExcluded) {
          console.log('Unauthorized access detected. Redirecting to login.');
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
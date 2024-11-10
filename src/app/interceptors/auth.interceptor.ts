import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private excludedPaths: string[] = ['/order-form', '/order-exists', '/order-confirmation'];

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isExcluded = false;

    try {
      const url = new URL(request.url); // Parse URL to get only the pathname
      isExcluded = this.excludedPaths.some(path => url.pathname.includes(path));
      console.log(`Request URL: ${url.pathname}, Excluded: ${isExcluded}`);
    } catch (error) {
      console.error("Invalid URL format:", request.url);
    }

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
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}

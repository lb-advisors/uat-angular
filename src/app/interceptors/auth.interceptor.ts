
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

    // Method 1: Pathname-based exclusion using URL parsing and dynamic customer ID
    try {
      const url = new URL(request.url); // Parse URL to get only the pathname
      const dynamicExcludedPaths = [
        /^https:\/\/lb-advisors\.github\.io\/uat-angular\/customer\/\d+\/order-form$/,
        /^https:\/\/lb-advisors\.github\.io\/uat-angular\/customer\/\d+\/order-exists$/,
        /^https:\/\/lb-advisors\.github\.io\/uat-angular\/customer\/\d+\/order-confirmation$/,
      ];
      isExcluded = dynamicExcludedPaths.some(pattern => pattern.test(url.href));
      console.log(`Request URL: ${url.href}, Excluded (by dynamic URL): ${isExcluded}`);
    } catch (error) {
      console.error("Invalid URL format:", request.url);
    }

    // Method 2: Custom Header exclusion (X-Skip-Auth header)
    const skipAuth = request.headers.has('X-Skip-Auth');
    if (skipAuth) {
      isExcluded = true;
      console.log('Skipping auth based on custom header for:', request.url);
    }

    // Method 3: Original exclusion path matching logic as a fallback
    const isExcludedByPath = this.excludedPaths.some(pattern => request.url.includes(pattern));
    isExcluded = isExcluded || isExcludedByPath;

    if (isExcluded) {
      console.log('Request is excluded from authentication:', request.url);
    }

    // Add Authorization header if token is available and request is not excluded
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
        if (error.status === 401 && !isExcluded) {
          console.warn('Unauthorized access detected. Redirecting to login.');
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}

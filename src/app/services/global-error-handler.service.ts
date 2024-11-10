import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private snackBarService: SnackbarService,
    private router: Router,
    private authService: AuthService
  ) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      // Check network connectivity
      if (!navigator.onLine) {
        this.snackBarService.showSnackBar('No internet connection');
        return;
      }

      // Handle client-side errors
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showSnackBar(error.error.message);
        return;
      }

      // Handle specific HTTP status codes
      switch (error.status) {
        case 401:
          this.snackBarService.showSnackBar('Session expired. Please login again');
          this.authService.clearToken();
          this.router.navigate(['/login']);
          break;

        case 403:
          this.snackBarService.showSnackBar('Access denied');
          break;

        case 404:
          this.snackBarService.showSnackBar('Resource not found');
          break;

        case 413:
          this.snackBarService.showSnackBar('File too large');
          break;

        case 500:
          this.snackBarService.showSnackBar('Server error. Please try again later');
          break;

        default:
          console.error('An error occurred:', error);
          const errorMessage = error.error?.message || 'An unexpected error occurred';
          this.snackBarService.showSnackBar(`Error: ${errorMessage}`);
      }

      // Log the full error for debugging
      console.error('Full error details:', {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        error: error.error,
      });
    } else {
      // Handle client-side/non-HTTP errors
      console.error('Client-side error:', error);
      this.snackBarService.showSnackBar('An unexpected error occurred');
    }
  }
}
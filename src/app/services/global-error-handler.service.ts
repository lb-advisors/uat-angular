import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private snackBarService: SnackbarService) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      // Server-side error
      if (!navigator.onLine) {
        this.snackBarService.showSnackBar('No internet connection');
        return;
      }
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showSnackBar(error.error.message);
        return;
      }

      if (error.status === 413) {
        this.snackBarService.showSnackBar('File too large');
        return;
      }

      console.error('An error occurred:', error);
      console.log(JSON.stringify(error.error));

      this.snackBarService.showSnackBar(
        'An error has occured: ' + error.error.message,
      );
    } else {
      // Client-side error
    }
  }
}

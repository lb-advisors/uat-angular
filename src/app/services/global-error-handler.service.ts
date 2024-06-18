import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private snackBarService: SnackbarService) {}

  handleError(error: unknown) {
    console.error('A##########n error occurred:', error);
    this.snackBarService.showSnackBar('An error has occured');
  }
}

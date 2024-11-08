import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // Remove the authorization header modification
    return next.handle(request).pipe(
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          this.handleServerSideError(err);
        } else {
          this.snackBarService.showSnackBar('Error fetching data');
        }
        return throwError(() => err);
      }),
    );
  }

  private handleServerSideError(error: HttpErrorResponse) {
    console.error(error.error.message);
    switch (error.status) {
      case 400: //  means the request could not be understood by the server.
        this.snackBarService.showSnackBar(
          'Bad Request, please try again later .',
        );
        break;
      case 401: // means lacks valid authentication credentials for the target resource.
        this.snackBarService.showSnackBar(
          'Unauthorized, please try again later.',
        );
        break;
      case 403: //  means you are not allowed access to the target resource.
        this.snackBarService.showSnackBar('Forbidden access is denied');
        break;
      case 500: // means there's an issue or temporary glitch with the application's programming
        console.log(error);
        this.snackBarService.showSnackBar(
          'Internal server error, please try again later.',
        );
        break;
      default:
        this.snackBarService.showSnackBar(
          'Error fetching data, please try again later.',
        );
        break;
    }
  }
}

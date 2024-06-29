import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const authToken = 'YOUR_AUTH_TOKEN_HERE';

    // Clone the request and add the authorization header
    const authReq = request.clone({
      setHeaders: {
        'X-New-Header': authToken,
      },
    });

    // Pass the cloned request with the updated header to the next handler
    return next.handle(authReq).pipe(
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          this.handleServerSideError(err);
        } else {
          this.snackBarService.showSnackBar('Error fetching data');
        }

        // Re-throw the error to propagate it further
        //return throwError(() => err);
        // stop propagating error
        return EMPTY;
      }),
    );
  }

  private handleServerSideError(error: HttpErrorResponse) {
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

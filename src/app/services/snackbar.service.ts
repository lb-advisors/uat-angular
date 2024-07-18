import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackBarRef!: MatSnackBarRef<TextOnlySnackBar>;
  private duration = 10000;
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private horizontalPos: MatSnackBarHorizontalPosition = 'center';
  private action = 'Hide';

  constructor(private matSnackBar: MatSnackBar) {}

  showSnackBar(message: string, style?: string) {
    this.snackBarRef = this.matSnackBar.open(message, this.action, {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: style,
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.closeSnackBar();
    });
  }

  closeSnackBar() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }
}

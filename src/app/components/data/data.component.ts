import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment'; // Import the environment configuration

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  private apiUrl = environment.apiUrl;
  uploadUrl: string = `${this.apiUrl}/database/csv/upload/profiles`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  downloadOrders() {
    const url = `${this.apiUrl}/database/csv/download/orders`;

    this.http.get(url, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' });
        const downloadURL = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadURL;
        link.download = 'orders.csv';
        link.click();
        window.URL.revokeObjectURL(downloadURL);
      },
      (error) => {
        console.error('Download failed:', error);
        this.snackBar.open('Failed to download orders. Please try again later.', 'Close', { duration: 3000 });
      },
    );
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    this.snackBar.open('Processing your CSV file', '', { duration: 20000 });

    this.http.post(this.uploadUrl, formData).subscribe({
      next: () => {
        this.snackBar.open('All Done', '', { duration: 3000 });
      },
    });
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  constructor(private http: HttpClient) {}

  downloadOrders() {
    const url = 'https://uat-pffc.onrender.com/api/database/csv/download/orders';
    
    this.http.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'text/csv' });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'orders.csv';
      link.click();
      window.URL.revokeObjectURL(downloadURL);
    }, error => {
      console.error('Download failed:', error);
      alert('Failed to download orders. Please try again later.');
    });
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    const url = 'https://uat-pffc.onrender.com/api/database/csv/upload/profiles';
    const formData = new FormData();
    formData.append('file', file);

    this.http.post(url, formData).subscribe({
      next: (response) => {
        alert('File uploaded successfully!');
      },
      error: (error: HttpErrorResponse) => {
        console.error('Upload failed:', error);
        alert('Failed to upload the file. Please try again.');
      }
    });
  }
}

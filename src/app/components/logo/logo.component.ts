import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent implements OnChanges {
  @Input() commpanyId!: number; // PFF

  imageSrc = 'assets/fogriver.png';
  imageBackgroundColor = '#000000';

  ngOnChanges(): void {
    if (this.commpanyId === 14) {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }
}

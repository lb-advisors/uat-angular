import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  username!: string | null;
  isHROpen: boolean = false;
  isSalesOpen: boolean = false;
  isOtherOpen: boolean = false; // New property for Other dropdown

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getFullname();
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    // Close all dropdowns after navigation
    this.isHROpen = false;
    this.isSalesOpen = false;
    this.isOtherOpen = false;
  }

  toggleHR(): void {
    this.isHROpen = !this.isHROpen;
    // Close other dropdowns when opening HR
    if (this.isHROpen) {
      this.isSalesOpen = false;
      this.isOtherOpen = false;
    }
  }

  toggleSales(): void {
    this.isSalesOpen = !this.isSalesOpen;
    // Close other dropdowns when opening Sales
    if (this.isSalesOpen) {
      this.isHROpen = false;
      this.isOtherOpen = false;
    }
  }

  // New method for Other dropdown
  toggleOther(): void {
    this.isOtherOpen = !this.isOtherOpen;
    // Close other dropdowns when opening Other
    if (this.isOtherOpen) {
      this.isHROpen = false;
      this.isSalesOpen = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
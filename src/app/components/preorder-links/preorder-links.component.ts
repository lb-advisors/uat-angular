import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { VendorsService, Vendor } from 'src/app/services/vendors.service'; // Import Vendor type
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  standalone: true,
  selector: 'app-vendor-links',
  templateUrl: './preorder-links.component.html',
  styleUrls: ['./preorder-links.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorLinksComponent implements OnInit {
  form!: FormGroup;
  vendors$!: Observable<{ vendorId: number; vendorName: string }[]>; // Transformed type
  vendors: { vendorId: number; vendorName: string }[] = [];
  filteredVendors: { vendorId: number; vendorName: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private vendorsService: VendorsService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      vendor: [], // Form control for vendor dropdown
    });

    // Load and transform vendors from service
    this.vendors$ = this.vendorsService.getVendors().pipe(
      map((vendors: Vendor[]) =>
        vendors.map((vendor) => ({
          vendorId: vendor.id,
          vendorName: vendor.name,
        }))
      ),
      tap((vendors) => {
        this.vendors = vendors;
        this.vendors.sort((a, b) => a.vendorName.localeCompare(b.vendorName)); // Sort vendors alphabetically
        this.filteredVendors = [...this.vendors];
        this.cdr.markForCheck();
      })
    );

    // Update filtered vendors based on selection
    this.form.get('vendor')!.valueChanges.subscribe((selectedVendor) => {
      if (selectedVendor) {
        this.filteredVendors = this.vendors.filter((vendor) =>
          vendor.vendorName.toLowerCase().includes(selectedVendor.toLowerCase())
        );
      } else {
        this.filteredVendors = [...this.vendors];
      }
    });
  }

  // Navigate to Preorder Form for the selected vendor
  navigateToPreorderForm(vendorId: number): void {
    this.router.navigate(['/preorder-form', vendorId]); // Navigate with vendorId as route parameter
  }

  // Copy Vendor Link to Clipboard
  copyLink(vendorId: number): void {
    const link = `${window.location.origin}/preorder-form/${vendorId}`; // Generate link for preorder form
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.snackbarService.showSnackBar('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  }
}

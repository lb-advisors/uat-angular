import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Profile } from 'src/app/models/profile-model';
import { Order } from 'src/app/models/order.model';
import { OrderRequest } from 'src/app/models/order-request.model';
import { ProfileRequest } from 'src/app/models/profile-request.model';
import { OrderFormService } from 'src/app/services/order-form.service';

@Component({
  standalone: true,
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  order!: Order;
  hasSpecials = false;
  orderForm!: FormGroup;
  submitted: boolean = false;
  customerId!: number;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private snackBarService: SnackbarService,
    private orderService: OrderFormService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Get customerId from route parameters
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.customerId = id ? +id : NaN;
      this.loadOrderData(this.customerId);
    });
  }

  loadOrderData(customerId: number): void {
    this.orderService.getOrderData(customerId).subscribe({
      next: (order: Order) => {
        this.order = order;
        this.hasSpecials = this.order.profiles.some((profile) => profile.isSpecial);
        const shipToValidators = order.shipTos?.length ? [Validators.required] : [];
        this.orderForm = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [Validators.required, this.dateAfterTomorrowValidator, this.dateWithinThreeMonthsValidator, this.dateNotOnSundayValidator]],
          shipToId: ['', shipToValidators],
          customerPo: [''],
          totalPrice: [0], // Initialize totalPrice
          profiles: this.fb.array(
            this.order.profiles.map((profile) => this.createProfileGroup(profile)),
            [this.atLeastOneQuantityValidator],
          ),
        });
        this.cdr.markForCheck();
      },
    });
  }

  get formControls() {
    return this.orderForm.controls;
  }

  get profileControls(): FormArray {
    return this.orderForm.get('profiles') as FormArray;
  }

  get totalPrice(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.order.profiles.length; i++) {
      const quantity = this.profileControls.at(i).get('quantity')?.value || 0;
      const packSize = this.order.profiles[i].packSize || 0; // Assuming 'packSize' is a property of 'profile'
      const price = this.order.profiles[i].salesPrice || 0; // Assuming 'salesPrice' is the price per unit
      totalPrice += quantity * packSize * price;
    }
    return totalPrice;
  }

  getRowTotalPrice(index: number): number {
    const quantity = this.profileControls.at(index).get('quantity')?.value || 0;
    const packSize = this.order.profiles[index].packSize || 0; // Assuming 'packSize' is a property of 'profile'
    const price = this.order.profiles[index].salesPrice || 0; // Assuming 'salesPrice' is the price per unit
    return quantity * packSize * price;
  }

  createProfileGroup(profile: Profile): FormGroup {
    return this.fb.group({
      profileDid: [profile.id], // Use id from the API response as profileDid
      quantity: ['', Validators.min(1)],
    });
  }

  onSubmit() {
    this.snackBarService.showSnackBar('Submitting Order...');

    if (this.orderForm.valid) {
      console.log('Form Submitted', this.orderForm.value);
      const order: OrderRequest = this.orderForm.value;
      order.profiles = order.profiles.filter((profile: ProfileRequest) => profile.quantity > 0);
      order.totalPrice = this.totalPrice; // Calculate total price

      // POST request to the API
      this.orderService.placeOrder(this.customerId, order).subscribe({
        next: (orderConfirmation) => {
          console.log('Order submitted successfully', orderConfirmation);
          this.router.navigate(['/customer', this.customerId, 'order-confirmation'], { state: { order: orderConfirmation, companyId: this.order.companyId } });
          this.snackBarService.showSnackBar('Order submitted successfully');
        },
        error: (error) => {
          const errorCode = error.status;
          const errorMessage = errorCode == 409 ? 'An order already exists for that day' : 'Error submitting order';
          if (errorCode == 409) {
            this.router.navigate(['/customer', this.customerId, 'order-exists'], { state: { order: error.error, companyId: this.order.companyId } });
          }
          this.snackBarService.showSnackBar(errorMessage);

          console.error('Error submitting order', error);
        },
      });

      this.submitted = true;
    } else {
      this.orderForm.markAllAsTouched(); // Mark all controls as touched to show validation errors
    }
  }

  get dataToBeSubmitted() {
    const data = this.orderForm.value;
    data.profiles = data.profiles.filter((profile: { quantity: number }) => profile.quantity > 0);
    return data;
  }

  isQuantityInvalid(index: number): boolean {
    return this.profileControls.at(index).get('quantity')?.invalid || false;
  }

  isQuantityEntered(index: number): boolean {
    return typeof this.profileControls.at(index).get('quantity')?.value === 'number';
  }

  // validator
  dateAfterTomorrowValidator(control: AbstractControl): ValidationErrors | null {
    const dateParts = control.value.split('-').map(Number);
    const dateValue = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const today = new Date();
    return dateValue > today ? null : { dateAfterTomorrow: true };
  }

  // validator
  atLeastOneQuantityValidator(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    const hasAtLeastOneQuantity = formArray.controls.some((group) => group.get('quantity')?.value > 0);
    return hasAtLeastOneQuantity ? null : { atLeastOneQuantity: true };
  }

  // validator
  dateWithinThreeMonthsValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = new Date(control.value);
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    threeMonthsFromNow.setHours(0, 0, 0, 0);

    return dateValue <= threeMonthsFromNow ? null : { dateWithinThreeMonths: true };
  }

  // validator
  dateNotOnSundayValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = new Date(control.value);
    return dateValue.getDay() != 6 ? null : { dateNotOnSunday: true };
  }
}

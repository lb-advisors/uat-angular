import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { OrderForm } from 'src/app/models/order-form.model';
import { Profile } from 'src/app/models/profile.model';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  standalone: true,
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class OrderNewComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  order!: OrderForm;
  orderForm!: FormGroup;
  submitted: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private snackBarService: SnackbarService) {}

  ngOnInit(): void {
    // fetch remote data
    this.http.get<OrderForm>(`${this.apiUrl}/customers/5003/profiles`).subscribe({
      next: (order) => {
        this.order = order;
        this.orderForm = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [Validators.required, this.dateAfterTomorrowValidator, this.dateWithinThreeMonthsValidator, this.dateNotOnSundayValidator]],
          shipToId: ['', [Validators.required]],
          profiles: this.fb.array(
            this.order.profiles.map((profile) => this.createProfileGroup(profile)),
            [this.atLeastOneQuantityValidator],
          ),
        });
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
      totalPrice += this.order.profiles[i].salesPrice * this.profileControls.at(i).get('quantity')?.value;
    }
    return totalPrice;
  }

  createProfileGroup(profile: Profile): FormGroup {
    return this.fb.group({
      id: [profile.id],
      quantity: ['', Validators.min(0.0001)],
    });
  }

  onSubmit() {
    this.snackBarService.showSnackBar('Just some sample message');

    if (this.orderForm.valid) {
      console.log('Form Submitted', this.orderForm.value);
      const order = this.orderForm.value;
      order.profiles = order.profiles.filter((control: { quantity: number }) => control.quantity > 0);

      // add code to post the order
      // ...

      this.submitted = true;
    } else {
      this.orderForm.markAllAsTouched(); // Mark all controls as touched to show validation errors
    }
  }

  get dataToBeSubmitted() {
    const data = this.orderForm.value;
    data.profiles = data.profiles.filter((control: { quantity: number }) => control.quantity > 0);
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
    const dateValue = new Date(control.value);
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

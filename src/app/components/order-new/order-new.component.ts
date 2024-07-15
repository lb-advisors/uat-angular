import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.http
      .get<OrderForm>(`${this.apiUrl}/customers/5003/profiles`)
      .subscribe({
        next: (order) => {
          this.order = order;
          this.form = this.fb.group({
            customerId: [order.customerId],
            deliveryDate: [
              '',
              [Validators.required, this.dateAfterTomorrowValidator],
            ],
            shipToId: [],
            profiles: this.fb.array(
              this.order.profiles.map((profile) =>
                this.createProfileGroup(profile),
              ),
              [this.atLeastOneQuantityValidator],
            ),
          });
        },
      });
  }

  get formControls() {
    return this.form.controls;
  }

  get profileControls(): FormArray {
    return this.form.get('profiles') as FormArray;
  }

  createProfileGroup(profile: Profile): FormGroup {
    return this.fb.group({
      id: [profile.id],
      quantity: ['', Validators.min(0.0001)],
    });
  }

  onSubmit() {
    this.snackBarService.showSnackBar('Just some sample message');

    const order = this.form.value;
    order.profiles = order.profiles.filter(
      (control: { quantity: number }) => control.quantity > 0,
    );

    // add code to post the order
    // ...
    this.submitted = true;
  }

  get dataToBeSubmitted() {
    const data = this.form.value;
    data.profiles = data.profiles.filter(
      (control: { quantity: number }) => control.quantity > 0,
    );
    return data;
  }

  isQuantityInvalid(index: number): boolean {
    return this.profileControls.at(index).get('quantity')?.invalid || false;
  }

  isQuantityEntered(index: number): boolean {
    return (
      typeof this.profileControls.at(index).get('quantity')?.value === 'number'
    );
  }

  // validator
  dateAfterTomorrowValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const dateValue = new Date(control.value);
    const today = new Date();
    const dayAfterTomorrow = new Date(today.setDate(today.getDate() + 2));
    return dateValue > dayAfterTomorrow ? null : { dateAfterTomorrow: true };
  }

  // validator
  atLeastOneQuantityValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const formArray = control as FormArray;
    const hasAtLeastOneQuantity = formArray.controls.some(
      (group) => group.get('quantity')?.value > 0,
    );
    return hasAtLeastOneQuantity ? null : { atLeastOneQuantity: true };
  }
}

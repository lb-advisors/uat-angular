import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { OrderNew } from 'src/app/models/order-new.model';
import { ProfileNew } from 'src/app/models/profile-new';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderNewComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  order!: OrderNew;
  form!: FormGroup;
  submitted: boolean = false;

  results!: OrderNew;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.http.get<OrderNew>(`${this.apiUrl}/customers/5003/profiles`).subscribe({
      next: (order) => {
        this.order = order;
        this.form = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [Validators.required, this.dateAfterTomorrowValidator]],
          shipToId: [],
          profiles: this.fb.array(
            this.order.profiles.map((profile) => this.createProfileGroup(profile)),
            [this.atLeastOneQuantityValidator],
          ),
        });
      },
    });
  }

  get profileControls(): FormArray {
    return this.form.get('profiles') as FormArray;
  }

  createProfileGroup(profile: ProfileNew): FormGroup {
    return this.fb.group({
      id: [profile.id],
      quantity: ['', Validators.min(0.0001)],
    });
  }

  onSubmit() {
    this.results = this.form.value;
    this.results.profiles = this.results.profiles.filter((control: { quantity: number }) => control.quantity > 0);

    console.log(this.results);
    console.log(this.profileControls.value);

    this.submitted = true;
    if (this.form.invalid) {
      console.error('Inv');
      return;
    }
  }

  isQuantityInvalid(index: number): boolean {
    return this.profileControls.at(index).get('quantity')?.invalid || false;
  }

  isQuantityEntered(index: number): boolean {
    return typeof this.profileControls.at(index).get('quantity')?.value === 'number';
  }

  dateAfterTomorrowValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = new Date(control.value);
    const today = new Date();
    const dayAfterTomorrow = new Date(today.setDate(today.getDate() + 2));
    return dateValue > dayAfterTomorrow ? null : { dateAfterTomorrow: true };
  }

  atLeastOneQuantityValidator(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    const hasAtLeastOneQuantity = formArray.controls.some((group) => group.get('quantity')?.value > 0);
    console.log('hasAtLeastOneQuantity' + hasAtLeastOneQuantity);

    return hasAtLeastOneQuantity ? null : { atLeastOneQuantity: true };
  }
}

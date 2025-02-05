import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface W4FormData {
  firstName: string;
  middleInitial: string;
  lastName: string;
  socialSecurity: string;
  address: string;
  cityStateZip: string;
  filingStatus: string;
  multipleJobs: boolean;
  qualifyingChildren: string;
  otherDependents: string;
  totalDependents: string;
  otherIncome: string;
  deductions: string;
  extraWithholding: string;
  employeeSignature: string;
  signatureDate: string;
  employerName: string;
  employerAddress: string;
  firstDateEmployment: string;
  employerEIN: string;
}

@Component({
  standalone: true,
  selector: 'app-w4-form',
  templateUrl: './w4-form.component.html',
  styleUrls: ['./w4-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class W4FormComponent implements OnInit {
  w4Form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.w4Form = this.fb.group({
      // Step 1: Personal Information
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleInitial: ['', [Validators.maxLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      socialSecurity: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      cityStateZip: ['', [Validators.required, Validators.minLength(5)]],
      filingStatus: ['', Validators.required],
      
      // Step 2: Multiple Jobs
      multipleJobs: [false],
      
      // Step 3: Claim Dependents
      qualifyingChildren: ['0', [Validators.min(0), Validators.pattern('^[0-9]*$')]],
      otherDependents: ['0', [Validators.min(0), Validators.pattern('^[0-9]*$')]],
      totalDependents: ['0'],
      
      // Step 4: Other Adjustments
      otherIncome: ['', [Validators.pattern('^[0-9]*$')]],
      deductions: ['', [Validators.pattern('^[0-9]*$')]],
      extraWithholding: ['', [Validators.pattern('^[0-9]*$')]],
      
      // Step 5: Signature
      employeeSignature: ['', Validators.required],
      signatureDate: ['', Validators.required],
      
      // Employer Section
      employerName: [''],
      employerAddress: [''],
      firstDateEmployment: [''],
      employerEIN: ['', [Validators.pattern('^[0-9]{9}$')]]
    });
  }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.w4Form.patchValue({
      signatureDate: today
    });

    // Subscribe to dependent changes
    this.w4Form.get('qualifyingChildren')?.valueChanges.subscribe(() => {
      this.calculateDependents();
    });
    this.w4Form.get('otherDependents')?.valueChanges.subscribe(() => {
      this.calculateDependents();
    });
  }

  calculateDependents() {
    const children = Number(this.w4Form.get('qualifyingChildren')?.value || 0) * 2000;
    const others = Number(this.w4Form.get('otherDependents')?.value || 0) * 500;
    const total = children + others;
    this.w4Form.patchValue({
      totalDependents: total.toString()
    }, { emitEvent: false });
  }

  getErrorMessage(controlName: string): string {
    const control = this.w4Form.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }
    if (control?.hasError('pattern')) {
      return `Invalid ${controlName} format`;
    }
    if (control?.hasError('minlength')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is too short`;
    }
    return '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.w4Form.valid) {
      const formData: W4FormData = this.w4Form.value;
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    } else {
      console.log('Form is invalid');
      Object.keys(this.w4Form.controls).forEach(key => {
        const control = this.w4Form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
          console.log(`${key} is invalid:`, control.errors);
        }
      });
    }
  }

  resetForm() {
    this.submitted = false;
    this.w4Form.reset();
    const today = new Date().toISOString().split('T')[0];
    this.w4Form.patchValue({
      signatureDate: today,
      qualifyingChildren: '0',
      otherDependents: '0',
      totalDependents: '0'
    });
  }
}
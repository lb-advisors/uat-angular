import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-w4-form',
  templateUrl: './w4-form.component.html',
  styleUrls: ['./w4-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class W4FormComponent implements OnInit {
  w4Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.w4Form = this.fb.group({
      // Step 1: Personal Information
      firstName: ['', Validators.required],
      middleInitial: [''],
      lastName: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      address: ['', Validators.required],
      cityStateZip: ['', Validators.required],
      filingStatus: ['', Validators.required],
      
      // Step 2: Multiple Jobs
      multipleJobs: [false],
      
      // Step 3: Claim Dependents
      qualifyingChildren: ['0'],
      otherDependents: ['0'],
      totalDependents: ['0'],
      
      // Step 4: Other Adjustments
      otherIncome: [''],
      deductions: [''],
      extraWithholding: [''],
      
      // Step 5: Signature
      employeeSignature: ['', Validators.required],
      signatureDate: ['', Validators.required],
      
      // Employer Section
      employerName: [''],
      employerAddress: [''],
      firstDateEmployment: [''],
      employerEIN: ['']
    });
  }

  ngOnInit(): void {
    // Set default date
    const today = new Date().toISOString().split('T')[0];
    this.w4Form.patchValue({
      signatureDate: today
    });
  }

  calculateDependents() {
    const children = Number(this.w4Form.get('qualifyingChildren')?.value || 0) * 2000;
    const others = Number(this.w4Form.get('otherDependents')?.value || 0) * 500;
    const total = children + others;
    this.w4Form.patchValue({
      totalDependents: total
    });
  }

  onSubmit() {
    if (this.w4Form.valid) {
      console.log(this.w4Form.value);
    } else {
      Object.keys(this.w4Form.controls).forEach(key => {
        const control = this.w4Form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
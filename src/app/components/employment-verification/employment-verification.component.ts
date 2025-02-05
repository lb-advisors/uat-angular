import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-employment-verification',
  templateUrl: './employment-verification.component.html',
  styleUrls: ['./employment-verification.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EmploymentVerificationComponent implements OnInit {
  verificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.verificationForm = this.fb.group({
      // Section 1: Employee Information
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleInitial: [''],
      otherNames: [''],
      address: ['', Validators.required],
      aptNumber: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      email: [''],
      telephone: [''],
      
      // Citizenship Status
      citizenshipStatus: ['', Validators.required],
      uscisNumber: [''],
      i94Number: [''],
      passportNumber: [''],
      countryOfIssuance: [''],

      // Employee Signature Section
      employeeSignature: ['', Validators.required],
      employeeSignatureDate: ['', Validators.required],

      // Section 2: Employer Review
      documentTitleA: [''],
      issuingAuthorityA: [''],
      documentNumberA: [''],
      expirationDateA: [''],
      
      documentTitleB: [''],
      issuingAuthorityB: [''],
      documentNumberB: [''],
      expirationDateB: [''],
      
      documentTitleC: [''],
      issuingAuthorityC: [''],
      documentNumberC: [''],
      expirationDateC: [''],

      // Additional Information
      additionalInformation: [''],
      alternativeProcedure: [false],

      // Employer Certification
      firstDayOfEmployment: [''],
      employerTitle: [''],
      employerName: [''],
      employerSignature: [''],
      employerSignatureDate: [''],
      businessName: [''],
      businessAddress: ['']
    });
  }

  ngOnInit(): void {
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    this.verificationForm.patchValue({
      employeeSignatureDate: today,
      employerSignatureDate: today
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    if (this.verificationForm.valid) {
      console.log(this.verificationForm.value);
      this.goToHome(); // Navigate to home after successful submission
    } else {
      Object.keys(this.verificationForm.controls).forEach(key => {
        const control = this.verificationForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
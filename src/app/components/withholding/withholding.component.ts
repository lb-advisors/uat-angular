import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-withholding',
  templateUrl: './withholding.component.html',
  styleUrls: ['./withholding.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class WithholdingComponent implements OnInit {
  withholdingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.withholdingForm = this.fb.group({
      // Personal Information
      fullName: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['CA', Validators.required],
      zipCode: ['', Validators.required],
      
      // Filing Status
      filingStatus: ['', Validators.required],
      
      // Allowances
      regularAllowances: ['0'],
      estimatedDeductions: ['0'],
      totalAllowances: ['0'],
      
      // Additional Withholding
      additionalAmount: [''],
      
      // Exemption Options
      exemptionClaim: [false],
      militaryExemption: [false],
      
      // Signature
      employeeSignature: ['', Validators.required],
      signatureDate: ['', Validators.required],
      
      // Employer Section
      employerName: [''],
      employerAddress: [''],
      payrollTaxNumber: ['']
    });
  }

  ngOnInit(): void {
    // Set default date
    const today = new Date().toISOString().split('T')[0];
    this.withholdingForm.patchValue({
      signatureDate: today
    });
  }

  calculateTotalAllowances() {
    const regular = Number(this.withholdingForm.get('regularAllowances')?.value || 0);
    const estimated = Number(this.withholdingForm.get('estimatedDeductions')?.value || 0);
    const total = regular + estimated;
    
    this.withholdingForm.patchValue({
      totalAllowances: total
    });
  }

  onSubmit() {
    if (this.withholdingForm.valid) {
      console.log(this.withholdingForm.value);
    } else {
      Object.keys(this.withholdingForm.controls).forEach(key => {
        const control = this.withholdingForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-at-will-employment',
  templateUrl: './at-will-employment.component.html',
  styleUrls: ['./at-will-employment.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AtWillEmploymentComponent implements OnInit {
  employmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employmentForm = this.fb.group({
      employeeDate: [''],
      employeeSignature: [''],
      employeeDate2: [''],
      employeeName: [''],
      companyRepSignature: [''],
      companyRepName: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employmentForm.valid) {
      console.log(this.employmentForm.value);
      // Handle form submission
    }
  }
}
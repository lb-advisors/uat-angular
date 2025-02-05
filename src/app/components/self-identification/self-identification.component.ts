import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-self-identification',
  templateUrl: './self-identification.component.html',
  styleUrls: ['./self-identification.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SelfIdentificationComponent implements OnInit {
  identificationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.identificationForm = this.fb.group({
      name: ['', Validators.required],
      positionTitle: ['', Validators.required],
      date: ['', Validators.required],
      legalSex: ['', Validators.required],
      raceEthnicity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    this.identificationForm.patchValue({
      date: today
    });
  }

  onSubmit(): void {
    if (this.identificationForm.valid) {
      console.log(this.identificationForm.value);
      // Handle form submission
    }
  }
}
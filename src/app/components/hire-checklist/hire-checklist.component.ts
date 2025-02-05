import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hire-checklist',
  templateUrl: './hire-checklist.component.html',
  styleUrls: ['./hire-checklist.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class HireChecklistComponent implements OnInit {
  checklistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      name: [''],
      title: [''],
      department: [''],
      
      // Forms Completed Section
      employmentApplication: [false],
      other1: [false],
      
      // New Employee Paperwork Section
      w4Form: [false],
      i9Form: [false],
      directDeposit: [false],
      statusChange: [false],
      handbookAcknowledgement: [false],
      harassmentPolicy: [false],
      propertyReturn: [false],
      wageProtection: [false],

      // New Hire Packet Section
      employeeHandbook: [false],
      jobDescription: [false],
      insuranceInfo: [false],
      holidaySchedule: [false],
      brochures: [false],
      harassmentPamphlet: [false],
      workersComp: [false],
      disabilityInfo: [false],
      phoneList: [false],
      other2: [false],

      // Manager Discussion Section
      companyHistory: [false],
      orientationPeriod: [false],
      departmentResponsibilities: [false],
      positionDuties: [false],
      workHours: [false],
      attendance: [false],
      timeOffProcedure: [false],
      timeRecords: [false],
      safetyRequirements: [false],
      dressCode: [false],
      other3: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.checklistForm.valid) {
      console.log(this.checklistForm.value);
    }
  }
}
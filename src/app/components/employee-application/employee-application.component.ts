import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-application',
  templateUrl: './employee-application.component.html',
  styleUrls: ['./employee-application.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EmployeeApplicationComponent {
  currentStep = 1;

  employee = {
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    dateAvailable: '',
    socialSecurityNumber: '',
    desiredSalary: '',
    positionApplied: '',
    isCitizen: false,
    authorizedToWork: false,
    workedBefore: false,
    workedBeforeWhen: '',
    education: {
      highSchool: { name: '', address: '', from: '', to: '', graduated: false, degree: '' },
      college: { name: '', address: '', from: '', to: '', graduated: false, degree: '' },
      other: { name: '', address: '', from: '', to: '', graduated: false, degree: '' }
    },
    references: [
      { fullName: '', relationship: '', company: '', phone: '', address: '' },
      { fullName: '', relationship: '', company: '', phone: '', address: '' },
      { fullName: '', relationship: '', company: '', phone: '', address: '' }
    ]
  };

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitApplication() {
    console.log('Application submitted:', this.employee);
    // Add your API submission logic here
  }
}

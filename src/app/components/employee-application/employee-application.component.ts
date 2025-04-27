import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    ],
    previousEmployment: [
      { company: '', phone: '', address: '', supervisor: '', jobTitle: '', startingSalary: '', endingSalary: '', responsibilities: '', from: '', to: '', reasonForLeaving: '', contactSupervisor: false },
      { company: '', phone: '', address: '', supervisor: '', jobTitle: '', startingSalary: '', endingSalary: '', responsibilities: '', from: '', to: '', reasonForLeaving: '', contactSupervisor: false },
      { company: '', phone: '', address: '', supervisor: '', jobTitle: '', startingSalary: '', endingSalary: '', responsibilities: '', from: '', to: '', reasonForLeaving: '', contactSupervisor: false }
    ],
    militaryService: {
      branch: '',
      from: '',
      to: '',
      rankAtDischarge: '',
      typeOfDischarge: '',
      explanation: ''
    },
    disclaimer: {
      signature: '',
      date: ''
    }
  };

  constructor(@Inject(Router) private router: Router) {}

  goToStep(step: number) {
    // Basic form validation before allowing navigation
    if (step >= 1 && step <= 6) {
      // Optional: Add validation logic here if needed
      // For example, checking if required fields are filled before allowing to proceed
      
      this.currentStep = step;
    }
  }

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  submitApplication() {
    console.log('Application submitted:', this.employee);
    // Add your API submission logic here
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person } from './person';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  person: Person = new Person();
  formValid: boolean = false;

  validateForm() {
    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameValid = this.person.username.length >= 6;
    const passwordValid = this.person.password.length >= 10 && /[A-Z]/.test(this.person.password) && /\d/.test(this.person.password);
    const passwordsMatch = this.person.password === this.person.passwordConfirmation;
    const personalIdRegex = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d[-U-Y]|[0-2]\d[A-F])\d{3}[\dA-Z]$/;
    const termsAccepted = this.person.termsAccepted;

    this.formValid = nameRegex.test(this.person.firstName) &&
                     nameRegex.test(this.person.lastName) &&
                     emailRegex.test(this.person.email) &&
                     usernameValid &&
                     passwordValid &&
                     passwordsMatch &&
                     personalIdRegex.test(this.person.personalId) &&
                     termsAccepted;
  }

  onSubmit() {
    if (this.formValid) {
      
      console.log('Form submitted:', this.person);
    }
  }
}

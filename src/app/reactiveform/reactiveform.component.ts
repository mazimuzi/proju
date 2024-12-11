import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../userform/person';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  personForm: FormGroup;
  person: Person;

  constructor(private fb: FormBuilder) {
    this.person = new Person();
    this.personForm = this.fb.group({
      firstName: [this.person.firstName, [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]*')]],
      lastName: [this.person.lastName, [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]*')]],
      email: [this.person.email, [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$')]],
      username: [this.person.username, [Validators.required, Validators.minLength(6)]],
      password: [this.person.password, [Validators.required, Validators.minLength(10)]],
      passwordConfirmation: [this.person.passwordConfirmation, [Validators.required]],
      personalId: [this.person.personalId, [Validators.required, Validators.pattern('^\\d{6}-\\d{4}$')]],
      termsAccepted: [this.person.termsAccepted, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.personForm.valid) {
      console.log('Form Submitted!', this.personForm.value);
    }
  }

  validateForm(): void {
  }
}

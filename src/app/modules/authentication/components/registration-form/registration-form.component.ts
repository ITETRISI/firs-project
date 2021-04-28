import { Component,EventEmitter , OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Output() setRegistrationForm = new EventEmitter<FormGroup> ();

  registrationForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
    ]),
  }) 

  constructor() {}

  ngOnInit(): void {
    this.setRegistrationForm.emit(this.registrationForm)
  }

  addFormControl(group){
    this.registrationForm.addControl('passwordForm', group);
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
    ]),
    passwordGroup: new FormGroup({
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    })
  }) 

  constructor() {}

  ngOnInit(): void {
    this.registrationForm.get('passwordGroup').setValidators([this.checkPassword('password','confirmPassword')])
  }

  checkPassword(passwordControlName: string, confirmControlName: string): ValidatorFn {
    return (group: FormGroup): {passwordNotMatch: boolean} | null => {
      const error = {passwordNotMatch: true}
      const password = group.get(passwordControlName).value;
      const confirmPassword = group.get(confirmControlName).value;
      const isMatch = password === confirmPassword;
      if(!isMatch){
        group.get('confirmPassword').setErrors(error)
      }
      return isMatch ? null : error;
    };
  }

}

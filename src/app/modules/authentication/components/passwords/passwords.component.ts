import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {

  @Output() addFormControl = new EventEmitter < FormGroup > ();

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ]),
  })

  constructor() { }

  ngOnInit(): void {
    // this.passwordForm.setValidators([this.checkPassword('password','confirmPassword')])
    this.checkPassword('password','confirmPassword')
    this.addFormControl.emit(this.passwordForm);
  }

  // checkPassword(passwordControlName: string, confirmControlName: string): ValidatorFn {
  //   return (group: FormGroup): {passwordNotMatch: boolean} | null => {
  //     const error = {passwordNotMatch: true}
  //     const password = group.get(passwordControlName);
  //     const confirmPassword = group.get(confirmControlName);
  //     const isMatch = password.value === confirmPassword.value;
  //     if(!isMatch){
  //       group.get('confirmPassword').setErrors(error)
  //     }
  //     return isMatch ? null : error;
  //   };
  // }

  checkPassword(passwordControlName: string, confirmControlName: string): void{
    const error = {passwordNotMatch: true};
    const password =  this.passwordForm.get(passwordControlName);
    const confirmPassword =  this.passwordForm.get(confirmControlName);
    combineLatest([
        password.valueChanges,
        confirmPassword.valueChanges
      ]).subscribe(result => {
      if(result[0] !== result[1]){
        confirmPassword.setErrors(error)
      }
    })
  }

}

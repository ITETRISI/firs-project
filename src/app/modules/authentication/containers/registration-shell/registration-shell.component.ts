import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  setRegistrationForm(registrationForm: FormGroup){
    this.registrationForm = registrationForm;
    console.log('Parent',this.registrationForm)
  }

  onSubmit(){
    if (this.registrationForm.valid) {
      console.log('form submitted');
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}

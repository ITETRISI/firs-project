import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  setRegistrationForm(registrationForm: FormGroup){
    this.registrationForm = registrationForm;
    console.log('Parent',this.registrationForm)
  }

  onSubmit(){
    if (this.registrationForm.valid) {
      const name = this.registrationForm.get('userName').value;
      const password = this.registrationForm.get('passwordForm.password').value;
      this.authentication.saveUser(name,password).subscribe(() => {
        this.router.navigate(['log-in']);
      })
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}

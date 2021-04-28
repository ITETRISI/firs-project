import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-log-in-shell',
  templateUrl: './log-in-shell.component.html',
  styleUrls: ['./log-in-shell.component.scss']
})
export class LogInShellComponent implements OnInit {

  logInForm: FormGroup

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  setLogInForm(logInForm: FormGroup){
    this.logInForm = logInForm;
  }

  onSubmit(){
    console.log(this.logInForm)
    if (this.logInForm.valid) {
      console.log('form submitted');
      this.authentication.getUser(this.logInForm.value).subscribe(() => {
        this.router.navigate(['users']);
      })
    } 
  }

}

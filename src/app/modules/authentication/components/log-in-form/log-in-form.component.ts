import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  @Output() setLogInForm = new EventEmitter<FormGroup>();

  logInForm: FormGroup = new FormGroup ({
    userName: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  })

  constructor() { }

  ngOnInit(): void {
    this.setLogInForm.emit(this.logInForm)
  }

}

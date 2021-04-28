import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in-shell',
  templateUrl: './log-in-shell.component.html',
  styleUrls: ['./log-in-shell.component.scss']
})
export class LogInShellComponent implements OnInit {

  lofInForm: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  setLogInForm(lofInForm: FormGroup){
    this.lofInForm = lofInForm;
  }

  onSubmit(){
    console.log(this.lofInForm)
    if (this.lofInForm.valid) {
      console.log('form submitted');
    } 
  }

}

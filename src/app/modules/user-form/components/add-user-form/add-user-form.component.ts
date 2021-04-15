import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {IUser } from 'src/app/modules/users/services/users/users.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  
  @Output() onSubmitEvent = new EventEmitter<IUser>();

  constructor() { }

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    company: new FormControl(''),
    departament: new FormControl(''),
    gender: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.onSubmitEvent.emit(this.userForm.value);
    return false
  }


}

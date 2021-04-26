import { Component, OnInit } from '@angular/core';
import {IUser, UsersService } from 'src/app/modules/users/services/users/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UsersService, private router: Router, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  addUser(){
    if(this.userForm.valid){
      this._snackBar.open('User created', 'Close', {
        duration: 2000,
      });
      this.userService.saveUser(this.userForm.value).subscribe()
      this.router.navigate(['/users']);
    }
  }

  saveUserForm(userForm: FormGroup){
    this.userForm = userForm
  }

}

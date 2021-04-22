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

  constructor(private userService: UsersService, private router: Router, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  addUser(userForm: FormGroup){
    if(userForm.valid){
      this._snackBar.open('User created', 'Close', {
        duration: 2000,
      });
      this.userService.saveUser(userForm.value)
      this.router.navigate(['/users']);
    }
  }

}

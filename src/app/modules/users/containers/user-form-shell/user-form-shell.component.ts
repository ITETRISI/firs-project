import { Component, OnInit } from '@angular/core';
import {IUser, UsersService } from 'src/app/modules/users/services/users/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  addUser(user: IUser){
    this._snackBar.open('User created', 'Close', {
      duration: 2000,
    });
    console.log(user)
    this.userService.saveUser(user)
    this.router.navigate(['/users']);
  }

}

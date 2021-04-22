import { Component, OnInit } from '@angular/core';
import {IUser, UsersService } from 'src/app/modules/users/services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-form-shell',
  templateUrl: './edit-user-form-shell.component.html',
  styleUrls: ['./edit-user-form-shell.component.scss']
})
export class EditUserFormShellComponent implements OnInit {
  user: IUser;
  userId: any;
  constructor(private userService: UsersService, private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  editUser(userForm: FormGroup){
    if(userForm.valid){
      this._snackBar.open('User was edit', 'Close', {
        duration: 2000,
      });
      this.userService.updateUser(userForm.value, this.user.id)
      this.router.navigate(['/users']);
    }
  }

  getUser(){
    this.userId = this.route.snapshot.params.id;
    this.user = this.userService.getUserById(this.userId);
  }

}

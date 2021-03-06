import { Component, OnInit } from '@angular/core';
import {IUser, UsersService } from 'src/app/modules/users/services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user-form-shell',
  templateUrl: './edit-user-form-shell.component.html',
  styleUrls: ['./edit-user-form-shell.component.scss']
})
export class EditUserFormShellComponent implements OnInit {
  user$: Observable<IUser>;
  user: IUser;
  userForm: FormGroup;
  userId: any;
  constructor(private userService: UsersService, private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  editUser(){
    if(this.userForm.valid){
      this._snackBar.open('User was edit', 'Close', {
        duration: 2000,
      });
      this.user = this.userForm.value;
      this.userService.updateUser(this.userForm.value, this.userId).subscribe();
      this.router.navigate(['/users']);
    }
  }

  getUser(){
    this.userId = this.route.snapshot.params.id;
    this.user$ = this.userService.getUserById(this.userId);
    this.user$.subscribe(result => this.user = result) ;
  }

  saveUserForm(userForm: FormGroup){
    this.userForm = userForm;
  }

}

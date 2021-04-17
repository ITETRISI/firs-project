import { Component, OnInit } from '@angular/core';
import {IUser, UsersService } from 'src/app/modules/users/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(user: IUser){
    console.log(user)
    this.userService.saveUser(user)
    this.router.navigate(['/users']);
  }

}

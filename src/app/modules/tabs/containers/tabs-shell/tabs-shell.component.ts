import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser, UsersService } from '../../../users/services/users/users.service';

@Component({
  selector: 'app-tabs-shell',
  templateUrl: './tabs-shell.component.html',
  styleUrls: ['./tabs-shell.component.scss']
})
export class TabsShellComponent implements OnInit {

  user$: Observable<IUser>;
  userId: any;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userId = this.route.snapshot.params.id;
    this.user$ = this.userService.getUserById(this.userId);
  }

}

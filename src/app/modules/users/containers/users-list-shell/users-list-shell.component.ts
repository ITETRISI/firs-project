import { Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { CardComponent } from 'src/app/modules/shared/components/card/card.component';
import { IUser, UsersService } from 'src/app/modules/users/services/users/users.service';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UsersListShellComponent implements OnInit {

  @ViewChildren(CardComponent) cardComponents : QueryList<CardComponent>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.updateUnits();
  }

  updateUnits(){
    this.users = this.userService.getUsers();
  }

  hide: boolean = true;
  users: IUser[] ;

  hideMale(): void {
    this.hide = !this.hide;
  }

  activeAllUsers(): void{
    this.cardComponents.forEach(card => {
        card.activateUser()
    });
  }

  changeActive(isActive: boolean, user: IUser): void{
    user.active = isActive;
    this.userService.updateUsers(this.users)
  }

  deleteUser(user: IUser): void{
    this.userService.deleteUser(user.id);
    this.updateUnits();
  }

}


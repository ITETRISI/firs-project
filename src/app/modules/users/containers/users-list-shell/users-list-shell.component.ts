import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CardComponent } from 'src/app/modules/shared/components/card/card.component';
import { IUser, UsersService } from 'src/app/services/users/users.service';



@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})

export class UsersListShellComponent implements OnInit {
  
  @ViewChildren(CardComponent) cardComponents : QueryList<CardComponent>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

  }

  hide: boolean = true;
  users: IUser[] ;

  hideMale(): void {
    this.hide = !this.hide;
  }

  changeUserGender(user: IUser) {
    user.gender = !user.gender
    console.log(this.users)
  }

  activeAllUsers(){
    this.cardComponents.forEach(card => {
      if(card.user.age > 18 && !card.user.active){
        card.activateUser()
      }
    });
  }

}


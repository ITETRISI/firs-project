import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})
export class UsersListShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide: boolean = true;
  users: IUser[] = [{
      name: "Daniil",
      age: 23,
      gender: true
    },
    {
      name: "Katya",
      age: 24,
      gender: false
    },
    {
      name: "Nastya",
      age: 25,
      gender: false
    },
    {
      name: "Oleg",
      age: 26,
      gender: true
    }
  ]

  changeGender(i:number):void{
    this.users[i].gender = !this.users[i].gender;
  }

  hideMale(): void {
    this.hide = !this.hide;
  }

}

interface IUser {
  name: string,
    age: number,
    gender: boolean
}
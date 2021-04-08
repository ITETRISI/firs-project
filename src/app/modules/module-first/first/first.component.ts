import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() {}

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

  ngOnInit(): void {
    console.log(this.users)
  }

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

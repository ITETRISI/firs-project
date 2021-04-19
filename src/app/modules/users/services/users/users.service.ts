import {
  Injectable
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import {
  of
} from 'rxjs';
import {
  delay,
  map
} from "rxjs/operators";

export interface IUser {
  id: string,
    firstName: string,
    lastName: string,
    company: string,
    department: string,
    age: number,
    gender: string,
    email: string,
    active: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

  defaultUsers: IUser[] = [{
      id: "1",
      firstName: "Daniil",
      lastName: "Osipenko",
      company: "ISoft",
      department: "Front-End",
      age: 21,
      gender: "male",
      email: "daniil@gmail.com",
      active: false,
    },
    {
      id: "2",
      firstName: "Dan",
      lastName: "Osip",
      company: "ISoft",
      department: "Front-End",
      age: 21,
      gender: "male",
      email: "dan@gmail.com",
      active: false,
    }
  ]

  constructor() {}

  getUsers(): IUser[] {
    if (!localStorage.getItem('users')) {
      this.users = this.defaultUsers
    }
    return this.users
  }

  saveUser(user: IUser): void {
    user.id = Math.random().toString(36).substr(2, 9);
    this.users.push(user)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  updateUsers(users: IUser[]): void {
    this.users = users;
    localStorage.setItem('users', JSON.stringify(users))
  }

  checkEmail(id: string  = ''): AsyncValidatorFn {
    console.log(id)
    return (control: AbstractControl) => {
      console.log(control)
      return of(this.users.find(user => user.email === control.value && user.id !== id))
        .pipe(
          map(user => {
            return user ? {
              emailExist: true
            } : null
          }),
          delay(2000)
        )
    }
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  updateUser(newUserData: IUser, id: string): void {
    const INDEX = this.users.findIndex(user => user.id === id)
    newUserData.id = id
    this.users[INDEX] = newUserData
  }

  getUserById(id: string): IUser {
    const INDEX = this.users.findIndex(user => user.id === id)
    return this.users[INDEX]
  }

}
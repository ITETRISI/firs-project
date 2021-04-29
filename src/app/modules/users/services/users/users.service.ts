import {
  Injectable
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  Observable,
  Observer,
  of ,
  Subject
} from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  filter,
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

  users: IUser[];

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

  getUsers(): Observable < IUser[] > {
    return new Observable((observer: Observer < IUser[] > ) => {
      setTimeout(() => {
        if (!localStorage.getItem('users')) {
          localStorage.setItem('users', JSON.stringify(this.defaultUsers))
        }
        this.users = JSON.parse(localStorage.getItem('users') || '[]')
        observer.next(JSON.parse(localStorage.getItem('users') || '[]'))
      }, 1000)
    })

  }

  saveUser(user: IUser): Observable < void > {
    return this.getUsers()
    .pipe(
      map((users) => {
        user.id = Math.random().toString(36).substr(2, 9);
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
      }),
      delay(500)
    );
  }

  activateUser(userId: string, isActive: boolean): Observable <void> {
    return this.getUsers()
    .pipe(
      map((users) => {
        const INDEX = users.findIndex(user => user.id === userId)
        users[INDEX].active = isActive;
        localStorage.setItem('users', JSON.stringify(users))
      })
    );
  }

  checkEmail(id: string = ''): AsyncValidatorFn {
    return (control: AbstractControl) => {
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

  deleteUser(id: string): Observable <void > {
    return this.getUsers()
    .pipe(
      map((users) => {
        const filteredUsers = users.filter(user => user.id !== id)
        localStorage.setItem('users', JSON.stringify(filteredUsers))
      }),
      delay(500)
    );
  }

  updateUser(newUserData: IUser, id: string): Observable < void > {
    return this.getUsers()
    .pipe(
      map((users) => {
        const INDEX = users.findIndex(user => user.id === id);
        newUserData.id = id;
        users[INDEX] = newUserData;
        localStorage.setItem('users', JSON.stringify(users))
      }),
      delay(500)
    );
  }

  getUserById(id: string): Observable < IUser > {
    return this.getUsers().pipe(map((users) => {
      return users.find(user => user.id === id)}));
  }

}

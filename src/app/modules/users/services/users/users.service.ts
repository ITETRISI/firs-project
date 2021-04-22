import {
  Injectable
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
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

  users: IUser[] ;

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
    return new Observable((observer: Observer<IUser[]>) => {
      setTimeout(()=> {
        if (!localStorage.getItem('users')) {
          this.users = this.defaultUsers
          localStorage.setItem('users', JSON.stringify(this.users))
        } else {
          this.users = JSON.parse(localStorage.getItem('users') || '[]')
        }
        observer.next(this.users)
      },2000)
    })
  }

  saveUser(user: IUser): Observable<void> {
    user.id = Math.random().toString(36).substr(2, 9);
    this.users.push(user)
    return of(localStorage.setItem('users', JSON.stringify(this.users))).pipe(delay(5000))
  }

  activateUser(userId: string, isActive: boolean): Observable<void>{
    const INDEX = this.users.findIndex(user => user.id === userId)
    this.users[INDEX].active = isActive;
    return of(localStorage.setItem('users', JSON.stringify(this.users))).pipe(delay(2000))
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

  deleteUser(id: string): Observable<void> {
    return new Observable(()=> {
      setTimeout(()=>{
        this.users = this.users.filter(user => user.id !== id)
        localStorage.setItem('users', JSON.stringify(this.users))
      },1500)
    })
    
  }

  updateUser(newUserData: IUser, id: string): Observable<void> {
    return new Observable(() => {
      setTimeout(() => {
        const INDEX = this.users.findIndex(user => user.id === id)
        newUserData.id = id
        this.users[INDEX] = newUserData
        localStorage.setItem('users', JSON.stringify(this.users))
      }, 1000)
    })
  }

  getUserById(id: string): Observable<IUser> {
    return new Observable((observer: Observer<IUser>) => {
      setTimeout(() => {
        const INDEX = this.users.findIndex(user => user.id === id);
        observer.next(this.users[INDEX]);
      }, 1000)
    })
  }

}

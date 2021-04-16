import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

export interface IUser {
  id: string,
  firstName: string,
  lastName: string,
  company: string,
  departament: string,
  age: number,
  gender: string,
  email: string,
  active: boolean,
}


export interface IValidationError {
  emailExist: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

  constructor() { }

  getUsers(): IUser[]{
    return this.users
  }

  saveUser(user: IUser): void{
    user.id = Math.random().toString(36).substr(2, 9);
    this.users.push(user)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  updateUsers(users: IUser[]): void{
    this.users = users;
    localStorage.setItem('users', JSON.stringify(users))
  }

  // checkEmail(control: string): Observable<boolean>{
  //   return new Observable<IValidationError>(observer => {
  //     const email = this.users.find(user => user.email === control.value);
  //     if(email){
  //       observer.next({
  //         emailExist: true
  //       }) 
  //     } else {
  //       observer.next({
  //         emailExist: false
  //       })   
  //     }
  //     observer.complete()
  //   }).pipe(delay(1000))
  // }
  // }

  deleteUser(id: string){
    this.users = this.users.filter(user => user.id !== id)
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}

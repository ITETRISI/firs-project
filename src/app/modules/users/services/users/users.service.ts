import { Injectable } from '@angular/core';

export interface IUser {
  firstName: string,
  lastName: string,
  company: string,
  departament: string,
  age: number,
  gender: string,
  active?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = [];

  constructor() { }

  getUsers(): IUser[]{
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    return this.users
  }

  saveUser(user: IUser): void{
    this.users.push(user)
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}

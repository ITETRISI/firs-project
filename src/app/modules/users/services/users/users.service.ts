import { Injectable } from '@angular/core';

export interface IUser {
  firstName: string,
  lastName: string,
  company: string,
  departament: string,
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

  constructor() { }

  getUsers(): IUser[]{
    return this.users
  }

  saveUser(user: IUser): void{
    this.users.push(user)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  updateUsers(users: IUser[]): void{
    this.users = users;
    localStorage.setItem('users', JSON.stringify(users))
  }
}

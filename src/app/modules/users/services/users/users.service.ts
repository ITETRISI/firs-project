import { Injectable } from '@angular/core';

export interface IUser {
  name: string,
    age: number,
    gender: boolean,
    active: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): IUser[]{
    return [{
      name: "Daniil",
      age: 17,
      gender: true,
      active: false,
    },
    {
      name: "Katya",
      age: 24,
      gender: false,
      active: false,
    },
    {
      name: "Nastya",
      age: 25,
      gender: false,
      active: false,
    },
    {
      name: "Oleg",
      age: 26,
      gender: true,
      active: false,
    }
  ]
  }
}

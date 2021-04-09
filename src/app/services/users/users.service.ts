import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return [{
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
  }
}

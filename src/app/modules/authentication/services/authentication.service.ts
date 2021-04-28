import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

interface ILogIn {
  name: 'string',
  password: 'string'
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLogIn(): Observable<boolean>{
    return new Observable((observer: Observer<boolean>) =>{
      if(JSON.parse(localStorage.getItem('user'))){
        observer.next(true)
      } else {
        observer.next(false)
      }
    })
  }

  saveUser(user: ILogIn){
    localStorage.setItem('user', JSON.stringify(user))
  }

  deleteUser(){
    localStorage.removeItem('user')
  }

}

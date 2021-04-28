import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

interface ILogIn {
  userName: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: Array<ILogIn> = [
    { 
      userName: 'admin',
      password: 'admin'
    }
  ]

  constructor() { }

  saveUser(userName: string, password: string){
    return new Observable((observer) =>{
      const user: ILogIn = {
        userName,
        password
      };
      this.users.push(user)
      observer.next()
    })
  }

  getUser(userData: ILogIn): Observable<void>{
    console.log(userData)
    return new Observable((observer: Observer<void>) =>{
      const user = this.users.find((user) => user.userName === userData.userName && user.password === userData.password)
      if(user){
        localStorage.setItem('user', JSON.stringify(user))
        observer.next()
      } else {
        observer.error('Invalid Data')
      }
    })
  }

  deleteUser(){
    localStorage.removeItem('user')
  }

}

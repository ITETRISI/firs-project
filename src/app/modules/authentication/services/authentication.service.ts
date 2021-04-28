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

  isLogIn: boolean = false

  constructor() { }

  isUserLogIn(): Observable<boolean>{
    return new Observable((observer: Observer<boolean>) =>{
      if(JSON.parse(localStorage.getItem('user')) && this.isLogIn){
        observer.next(true)
      } else {
        observer.next(false)
      }
    })
  }

  saveUser(userName: string, password: string){
    return new Observable((observer) =>{
      const user: ILogIn = {
        userName,
        password
      };
      this.isLogIn = false;
      localStorage.setItem('user', JSON.stringify(user))
      observer.next()
    })
  }

  getUser(userData: ILogIn): Observable<ILogIn>{
    console.log(userData)
    return new Observable((observer: Observer<ILogIn>) =>{
      const user: ILogIn = JSON.parse(localStorage.getItem('user'))
      this.isLogIn = true;
      observer.next(user)
    }).pipe(
      map((user) => {
      if(user.userName === userData.userName && user.password === userData.password){
        return user
      } else {
        throw new Error('Data is not correct');
      }
    }),
    
    )
  }

  deleteUser(){
    localStorage.removeItem('user')
  }

}

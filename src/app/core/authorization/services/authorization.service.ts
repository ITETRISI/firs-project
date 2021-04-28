import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  isUserLoggedIn(): Observable<boolean>{
    return new Observable((observer: Observer<boolean>) =>{
      if(JSON.parse(localStorage.getItem('user'))){
        observer.next(true)
      } else {
        observer.next(false)
      }
    })
  }

}

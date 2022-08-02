import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly _urlBase: string = `${environment.API}login`

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private _http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userSession')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  login(login: any) {
    return this._http.post<any>(this._urlBase, login);
  }

  logout() {
    localStorage.removeItem('userSession');
    this.router.navigate(["login"]);
  }

  setUserSession(user: any) {
    localStorage.setItem('userSession', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

}

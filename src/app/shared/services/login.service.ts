import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly _urlBase: string = `${environment.API}login`

  constructor(private _http: HttpClient,
    private router: Router,
    // private userSessionStore: UserSessionStore
    ) { }

  login(login: any) {
    return this._http.post<any>(this._urlBase, login);
  }
}

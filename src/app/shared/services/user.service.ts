import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { CrudService } from './crud.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}users`);
  }

}

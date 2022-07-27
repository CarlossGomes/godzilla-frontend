import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperations } from '../util/crud.operations';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    @Inject(String) protected _url: string
  ) { }

  create(t: T): Observable<T> {
    return this._http.post<T>(this._url, t);
  }
  edit(t: T): Observable<T> {
    return this._http.put<T>(this._url, t);
  }
  delete(id: ID): Observable<any> {
    return this._http.delete<T>(this._url + '/' + id);
  }
  getById(id: ID): Observable<T> {
    return this._http.get<T>(this._url + "/" + id);
  }
}

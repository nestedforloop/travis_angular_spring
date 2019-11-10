import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Greeting } from '../model/greeting';
import { Observable } from 'rxjs';//'rxjs/Observable';

import { map, catchError } from "rxjs/operators";
// import 'rxjs/add/operator/catch';
// import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  private greetingsUrl: string;
 
  constructor(private http: HttpClient) {
    this.greetingsUrl = 'http://localhost:8080/greeting';
  }

  public findAll(): Observable<Greeting[]> {
    return this.http.get<Greeting[]>(this.greetingsUrl);
  }
  // getRequest(){
  //   //return this.http.get("http://localhost:8080/greeting").pipe(map(res => res.json()));
  // // httpclient no longer has .json() method but apparently the response is json by default
  //   return this.http.get("http://localhost:8080/greeting").pipe(map(res => res));
  // }

  // fetch(startIndex: number, limit: number): Observable<Greeting[]> {
  //   let params = new HttpParams();
  //   params = params.set('startIndex',startIndex.toString()).set('limit',limit.toString());
  //   // base URL should not have ? in it at the en
  //   return this.http.get<ResponseOrders >(this.baseUrl,{
  //      params
  //   }).pipe(
  //      map(res => res.results || []),
  //      catchError(error => _throwError(error.message || error))
  //   );
  // }
}

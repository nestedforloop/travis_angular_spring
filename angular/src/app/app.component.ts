import { Component } from '@angular/core';
//import {Http, Response} from '@angular/http'; // old Http apparently not available anymore
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title: string;

//  data: any; //
//  loading: boolean; //
  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }

  // private REST_API_SERVER = "http://localhost:3000";
 
  // constructor( private httpClient: HttpClient ) {
  //   this.title = 'Spring Boot - Angular Application';
  // }

  // 
  // makeRequest() {
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }

  // makeRequest(): void {
  //   this.loading = true;
  //   this.http.request('http://localhost:8080/greeting')     
  //   .subscribe((res: Response) => {
  //       this.data = res.json();
  //       this.loading = false;      
  //   });
  // }
}

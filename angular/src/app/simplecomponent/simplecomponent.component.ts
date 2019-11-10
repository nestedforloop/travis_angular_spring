import { Component, OnInit } from '@angular/core';
//import {Http, Response} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Greeting } from '../model/greeting';
import { GreetingService } from '../service/greeting.service';

@Component({
  selector: 'app-simplecomponent',
  templateUrl: './simplecomponent.component.html',
  styleUrls: ['./simplecomponent.component.css']
})
export class SimplecomponentComponent implements OnInit {
  // data: any;
  // loading: boolean;
  greetings: Greeting[] = new Array<Greeting>();

  // constructor(private http: HttpClient) {
  // }

  constructor(private greetingService: GreetingService) {
  }  

  ngOnInit() {
    this.greetingService.findAll().subscribe(data => {
      this.greetings = data; });
      //this.greetingService.getRequest().subscribe(res=>this.greetings=res);  
  }

  // makeRequest(): void {
  //   this.loading = true;
  //   this.http.request('http://localhost:8080/greeting')
  //   .subscribe((res: Response) => {
  //     this.data = res.json();
  //     this.loading = false;
  //   });
  // }  

}

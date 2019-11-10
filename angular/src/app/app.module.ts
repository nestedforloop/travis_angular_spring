import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GreetingService } from './service/greeting.service'; // probably obsolete
import { SimplecomponentComponent } from './simplecomponent/simplecomponent.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SimplecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SimplecomponentComponent } from './simplecomponent/simplecomponent.component';

const routes: Routes = [
  { path: 'greeting', component: SimplecomponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import {ProductModule} from  './products/product.module';
import {CanActivate} from '@angular/router/src';


import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';

// Setting of Routes
const appRoute= [

  {path: 'welcome',component:WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**',redirectTo:'welcome',pathMatch:'full'}

];

@NgModule({
  imports: [ BrowserModule
            ,HttpModule
            ,ProductModule
            ,RouterModule.forRoot(appRoute)],
  declarations: [ AppComponent
                 ,WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

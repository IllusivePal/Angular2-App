import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule,Route } from '@angular/router';
import {CanActivate} from '@angular/router/src';


import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component'
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductGuardService} from './products/product-guard.service';
// Setting of Routes
const appRoute= [
  {path: 'products',component:ProductListComponent},
  {path: 'product/:id',canActivate:[ProductGuardService],component:ProductDetailComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**',redirectTo:'welcome',pathMatch:'full'}

];

@NgModule({
  imports: [ BrowserModule
            ,FormsModule
            ,HttpModule
            ,RouterModule.forRoot(appRoute)],
  declarations: [ AppComponent
                 ,ProductListComponent
                 ,ProductFilterPipe
                 ,StarComponent
                 ,WelcomeComponent
                 ,ProductDetailComponent],
  providers:[ProductGuardService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

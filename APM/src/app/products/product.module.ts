import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule,Route } from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component'
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './product.service';

// Setting of Routes
const appRoute= [
  {path: 'products',component:ProductListComponent},
  {path: 'product/:id',canActivate:[ProductGuardService],component:ProductDetailComponent}


];


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(appRoute)
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        StarComponent,
        ProductFilterPipe

    ],
    providers:[
        ProductService,
        ProductGuardService
    ]
})

export class ProductModule{

}
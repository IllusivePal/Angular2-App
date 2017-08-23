import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule,Route } from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component'
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './product.service';
import {LoadingModule} from '../shared/loading-shared.module';

// Setting of Routes
const appRoute= [
  {path: 'products',component:ProductListComponent},
  {path: 'product/:id',canActivate:[ProductGuardService],component:ProductDetailComponent}


];


@NgModule({
    imports:[
        SharedModule,
        LoadingModule,
        RouterModule.forChild(appRoute)
    ], 
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe

    ],
    providers:[
        ProductService,
        ProductGuardService
    ]
})

export class ProductModule{

}
import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule,Route } from '@angular/router';
import {LoadingModule} from '../loading/loading.module';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component'
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './product.service';

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
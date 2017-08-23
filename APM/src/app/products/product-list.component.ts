import {Component,OnInit,OnDestroy} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {LoadingService} from '../shared/loading.service';
import {Subscription} from 'rxjs/Subscription'
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit{
   
    constructor(private _productService: ProductService,private _loadServ:LoadingService){

    }
    pageTitle:string = 'Product List';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean = false;
    listFilter:string;
    products:IProduct[];
    errorMessage:string;
    private _subscription: Subscription;
    private _loadStat: boolean;
    
    ngOnInit():void{
        console.log('In onInit');
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
                        .subscribe(products => this.products = products, 
                         error => this.errorMessage = <any>error);
        this._subscription = this._loadServ.loadingProperty$.subscribe(p => {
            this._loadStat = p;
        });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    toggleImage(): void
    {
        this.showImage = !this.showImage;
    }
    onRatingClicked(message:string) :void
    {
        this.pageTitle = 'Product List: ' + message;
    }

    onGetClick() {
        this._loadServ.loadingProperty = true;
        setTimeout(()=>{
            this._loadServ.loadingProperty = false;
        },2000);
        
    }
}
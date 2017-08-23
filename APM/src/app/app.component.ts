import {Component,OnInit,ViewChild,OnDestroy} from '@angular/core';
import {ProductService} from './products/product.service';
import {LoadingService} from './shared/loading.service'
import {Subscription} from 'rxjs/Subscription'

@Component({
    selector: 'pm-app',
    template:`<div>
                    <nav class='navbar navbar-default'>
                        <div class='container-fluid'>
                            <a class='navbar-brand'>{{pageTitle}}</a>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['/welcome']">Home</a></li>
                                <li><a [routerLink]="['/products']">Product List</a></li>
                            </ul>
                        </div>
                    </nav>
              </div>
              <loading-app [showProgress]="show"></loading-app>
              {{ property }}
              
              <div class='container'>
                    <router-outlet></router-outlet>
              </div>`

})
export class AppComponent implements OnInit{
    pageTitle:string = "Acme Product Management";
    show:boolean;
    property:boolean;
    private _propertySubscription : Subscription;
    constructor(private _http:ProductService,private _loadService:LoadingService){}
    ngOnInit()
    {
        console.log("THIS START");
        this._loadService.loadingProperty = false;

        this._propertySubscription =  this._loadService.loadingProperty$.subscribe(p => {
            this.show = p;
        });
      
         

    }

    ngOnDestroy(){
        this._propertySubscription.unsubscribe();
    }

    /*GetEvent(ishoW:boolean){
        this.show = ishoW;
        setTimeout(()=>{
            this.show = false;
        },1000);
        console.log("This show: ",ishoW);
    }*/


}
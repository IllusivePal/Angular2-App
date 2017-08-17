import {Component,OnInit,ViewChild} from '@angular/core';
import {ProductService} from './products/product.service';
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
              <div *ngIf="show">LOADINGGGG</div>
              
              <div class='container'>
                    <router-outlet></router-outlet>
                   
              </div>`

})
export class AppComponent implements OnInit{
    pageTitle:string = "Acme Product Management";
    show:boolean;
    constructor(private _http:ProductService){}
    ngOnInit()
    {
        console.log("THIS START");
         setInterval(()=>{
            this.show = this._http.testVar;
            console.log(this._http.testVar);
            setTimeout(()=>{
            this.show = false;
            },5000);
         },1000);

         

    }
    /*GetEvent(ishoW:boolean){
        this.show = ishoW;
        setTimeout(()=>{
            this.show = false;
        },1000);
        console.log("This show: ",ishoW);
    }*/


}
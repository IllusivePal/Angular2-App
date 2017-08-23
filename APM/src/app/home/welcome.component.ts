import { Component,OnDestroy,OnInit } from '@angular/core';
import {LoadingService} from '../shared/loading.service';
import {Subscription} from 'rxjs/Subscription'


@Component({
    selector: 'home-app',
    moduleId:module.id,
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Welcome';
    private _propertySubscription : Subscription;
    loadingStat:boolean;
    constructor(private _loadServ:LoadingService){}
    ngOnInit(){
        this._propertySubscription = this._loadServ.loadingProperty$.subscribe(p => {
            this.loadingStat = p;
        });
    }

    ngOnDestroy(){
        this._propertySubscription.unsubscribe();
    }

    showLoading(){

        this._loadServ.loadingProperty = true;
        //console.log("STATUS",this.property)
        setTimeout(()=>{
           // if(this.loadingStat)
           // {
                 this._loadServ.loadingProperty = false;
           // }
           
        },2000)

       
    }
   
}

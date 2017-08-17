import {Component,OnChanges,Output,EventEmitter} from '@angular/core';
import {ProductService} from '../products/product.service';

@Component({
    selector: 'loading-comp',
    moduleId:module.id,
    templateUrl:'loading.component.html'
})

export class LoadingComponent
{
    @Output() showLoading:EventEmitter<boolean>= new EventEmitter<boolean>();

  
    constructor(private _http:ProductService){
        console.log("Constructor for Loading Component");
      
    }
    
    onClick():void{
          this.showLoading.emit(true);
          this._http.testVar = true;
    }

}
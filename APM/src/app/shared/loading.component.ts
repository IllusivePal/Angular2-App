import {Component, OnInit,Input} from '@angular/core'

@Component({
    selector:'loading-app',
    moduleId: module.id,
    templateUrl: 'loading.component.html'
})

export class LoadingComponent implements OnInit{

    @Input() showProgress:boolean
    constructor(){}

    ngOnInit(){
        console.log("TESTING NG ONINIT");
    }
}
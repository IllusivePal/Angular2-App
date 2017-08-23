import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoadingComponent} from './loading.component';
import {LoadingService} from './loading.service';

@NgModule({
    imports:[CommonModule],
    declarations:[LoadingComponent],
    providers:[LoadingService],
    exports:[LoadingComponent]

})

export class LoadingModule{

}
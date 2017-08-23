import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService{
    private _loadingProperty$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor(){}

    set loadingProperty(value: boolean){

        this._loadingProperty$.next(value);
    }

    get loadingProperty$(): Observable<boolean>{
        return this._loadingProperty$.asObservable();
    }
}
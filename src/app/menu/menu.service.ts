import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IItem } from './menu';

@Injectable()
export class ItemService {
    private _itemUrl = 'api/menus/items.json';

    constructor(private _http: Http) { }

    getItems(): Observable<IItem[]> {
        return this._http.get(this._itemUrl)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getItem(): Observable<IItem[]> {
        return this._http.get(this._itemUrl).do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
           
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

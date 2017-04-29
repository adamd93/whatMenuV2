import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { IItem } from './menu';

@Injectable()
export class ItemService {
    private _itemUrl = 'http://localhost:8081/getMenus';

    constructor(private _http: Http) { }

    getItems(): Promise<IItem[]> {
    return this._http.get(this._itemUrl)
                    .toPromise()
                    .then(function (data){
                        console.log(data);
                    });
                    
                    
    }
private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

    private handleError(error: any): Promise<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.json().error || 'Server error');
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { IPlaces } from './place';
import { IMenu } from './menu';

@Injectable()
export class ItemService {
    private placesUrl = 'http://localhost:8081/getPlaces';
    private menuUrl = 'http://localhost:8081/getMenus';


    constructor(private _http: Http) { }
    
    getPlaces(place:String): Observable<IPlaces> {
        console.log(place);
    return this._http.get(this.placesUrl + "/" + place)
                    .map(this.extractData)
                    .do(data => console.log('getProducts: ' + JSON.stringify(data)))
                    .catch(this.handleError);            
    }
    getMenu(id:String): Observable<IMenu[]> {
        console.log(id);
    return this._http.get(this.menuUrl + "/" + id)
                    .map(this.extractData)
                    .do(data => console.log('getProducts: ' + JSON.stringify(data)))
                    .catch(this.handleError);           
    }
    private extractData(res: Response) {
        let body = res.json();
        var i=0;
        console.log(body.document);
        return body.document || {};
    }

    private handleError(error: any): Promise<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.json().error || 'Server error');
    }
}

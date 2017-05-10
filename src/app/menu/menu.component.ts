import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';
import { HostListener } from '@angular/core';
import { IPlaces } from './place';
import { IMenu } from './menu';
import { ItemService } from './menu.service';
import { FormsModule }   from '@angular/forms';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    pageTitle: string = 'Menu';
    places: IPlaces;
    name : string ="work motherfucker";
    errorMessage: string;
    private sub: Subscription;
    menu: IMenu[];
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _itemService: ItemService) {
    }

    ngOnInit(){

    }
    search(value:string) {
      console.log(value);
        this._itemService.getPlaces(value).subscribe(places => this.places = places)         
    }
    getMenu(value:string){
        this._itemService.getMenu(value).subscribe(menu => this.menu = menu)         
    }

}

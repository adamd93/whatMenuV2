import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';
import { HostListener } from '@angular/core';
import { IItem } from './menu';
import { ItemService } from './menu.service';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent  {
    pageTitle: string = 'Menu';
    item: IItem;
    errorMessage: string;
    private sub: Subscription;
    items: IItem[];
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _itemService: ItemService) {
    }


    search(event) {
        event.preventDefault();
        this._itemService.getItems().then(items => this.items = items)
        
               
    }

}

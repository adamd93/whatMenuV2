import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';
import { HostListener } from '@angular/core';
import { IItem } from './menu';
import { ItemService } from './menu.service';
import { FormsModule }   from '@angular/forms';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent  {
    pageTitle: string = 'Menu';
    item: IItem;
    errorMessage: string;
    private sub: Subscription;
    items: IItem[];
    mode = 'Observable';
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _itemService: ItemService) {
    }


    search(value:string) {
      console.log(value);
        this._itemService.getItems(value).then(function (data) { 
            this.item = data[0];
        });          
    }

}

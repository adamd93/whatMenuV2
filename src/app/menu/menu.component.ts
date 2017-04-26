import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IItem } from './menu';
import { ItemService } from './menu.service';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent implements  OnDestroy {
    pageTitle: string = 'Menu';
    item: IItem;
    errorMessage: string;
    private sub: Subscription;
    items: IItem[];
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _itemService: ItemService) {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    search() {
        this._itemService.getItem()
                .subscribe(items => this.items = items,
                           error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/menu']);
    }

}

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ItemService } from './menu.service';
import { HttpModule, JsonpModule } from '@angular/http';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HttpModule
   
  ],
  declarations: [
  ],
  providers: [
    ItemService,
  ]
})
export class ItemModule {}
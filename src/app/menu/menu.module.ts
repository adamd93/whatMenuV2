import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ItemService } from './menu.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
   
  ],
  declarations: [
  ],
  providers: [
    ItemService,
  ]
})
export class ItemModule {}
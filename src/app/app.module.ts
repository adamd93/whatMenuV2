import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MenuComponent } from './menu/menu.component';

/* Feature Modules */
import { ItemModule } from './menu/menu.module';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'menu', component: MenuComponent }
    ]),
    ItemModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
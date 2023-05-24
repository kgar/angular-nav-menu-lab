import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSubMenuComponent } from './nav-sub-menu/nav-sub-menu.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { ViewCComponent } from './view-c/view-c.component';
import { ViewDComponent } from './view-d/view-d.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavSubMenuComponent,
    NavItemComponent,
    ViewAComponent,
    ViewBComponent,
    ViewCComponent,
    ViewDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

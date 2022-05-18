import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PlaystationComponentComponent } from './playstation-component/playstation-component.component';
import { NintendoComponentComponent } from './nintendo-component/nintendo-component.component';
import { XboxComponentComponent } from './xbox-component/xbox-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PcComponentComponent } from './pc-component/pc-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PlaystationComponentComponent,
    NintendoComponentComponent,
    XboxComponentComponent,
    PcComponentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

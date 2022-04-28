import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PlaystationComponentComponent } from './playstation-component/playstation-component.component';
import { NintendoComponentComponent } from './nintendo-component/nintendo-component.component';
import { XboxComponentComponent } from './xbox-component/xbox-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PlaystationComponentComponent,
    NintendoComponentComponent,
    XboxComponentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

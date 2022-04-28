import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NintendoComponentComponent } from './nintendo-component/nintendo-component.component';
import { PlaystationComponentComponent } from './playstation-component/playstation-component.component';
import { XboxComponentComponent } from './xbox-component/xbox-component.component';

const routes: Routes = [

  {path:'', component:HomeComponentComponent},
  {path:'playstation', component:PlaystationComponentComponent},
  {path:'nintendo', component:NintendoComponentComponent},
  {path:'xbox', component:XboxComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

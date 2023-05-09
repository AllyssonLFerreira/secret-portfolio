import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

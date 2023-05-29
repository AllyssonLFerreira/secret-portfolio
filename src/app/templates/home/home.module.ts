import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorksAndProjectsComponent } from './components/works-and-projects/works-and-projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    SkillsComponent,
    WorksAndProjectsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

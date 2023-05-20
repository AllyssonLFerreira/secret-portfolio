import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { WorksAndProjectsComponent } from "./components/works-and-projects/works-and-projects.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
          {
            path: '',
            component: PresentationComponent,
          },
          {
            path: 'skills',
            component: SkillsComponent,
          },
          {
            path: 'works',
            component: WorksAndProjectsComponent
          }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

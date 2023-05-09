import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PresentationComponent } from "./components/presentation/presentation.component";

const routes: Routes = [ 
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: PresentationComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

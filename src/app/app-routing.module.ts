import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './shared/organism/loading/loading.component';
import { RetrowaveBackgroundComponent } from "./shared/atoms/retrowave-background/retrowave-background.component";
import { NetworkComponent } from './shared/organism/network/network.component';

const routes: Routes = [
  {
    path: 'secret',
    loadChildren: () => import('src/app/templates/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'reboot',
    component: LoadingComponent
  },
  {
    path: '',
    redirectTo: 'reboot',
    pathMatch:'full'
  },
  {
    path: 'modal',
    component: NetworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

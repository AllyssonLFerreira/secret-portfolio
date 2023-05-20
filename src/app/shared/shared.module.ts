import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrowaveBackgroundComponent } from './atoms/retrowave-background/retrowave-background.component';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { LoadingComponent } from './organism/loading/loading.component';
import { CyberButtonComponent } from './atoms/cyber-button/cyber-button.component';
import { RouterModule } from '@angular/router';
import { CyberLinkComponent } from './atoms/cyber-link/cyber-link.component';
import { TableComponent } from './organism/table/table.component';
import { SharedDirective } from './shared.directive';
import { NavComponent } from './organism/nav/nav.component';

@NgModule({
  declarations: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    CyberLinkComponent,
    TableComponent,
    SharedDirective,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    CyberLinkComponent,
    TableComponent,
    NavComponent,
  ]
})
export class SharedModule { }

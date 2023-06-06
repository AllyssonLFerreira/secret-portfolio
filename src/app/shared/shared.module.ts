import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrowaveBackgroundComponent } from './atoms/retrowave-background/retrowave-background.component';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { LoadingComponent } from './organism/loading/loading.component';
import { CyberButtonComponent } from './atoms/cyber-button/cyber-button.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './organism/table/table.component';
import { SharedDirective } from './shared.directive';
import {ScannerComponent} from "./organism/scanner/scanner";
import { ErrorComponent } from './organism/error/error.component';
import { NetworkComponent } from './organism/network/network.component';
import { CyberLinkComponent } from './atoms/cyber-link/cyber-link.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    TableComponent,
    SharedDirective,
    ScannerComponent,
    ErrorComponent,
    NetworkComponent,
    CyberLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    TableComponent,
    ScannerComponent,
    ErrorComponent,
    NetworkComponent,
    CyberLinkComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrowaveBackgroundComponent } from './atoms/retrowave-background/retrowave-background.component';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { LoadingComponent } from './organism/loading/loading.component';
import { CyberButtonComponent } from './atoms/cyber-button/cyber-button.component';
import { ScanlineComponent } from './atoms/scanline/scanline.component';
@NgModule({
  declarations: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    ScanlineComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RetrowaveBackgroundComponent,
    SpinnerComponent,
    LoadingComponent,
    CyberButtonComponent,
    ScanlineComponent,
  ]
})
export class SharedModule { }

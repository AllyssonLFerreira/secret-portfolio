import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SharedDirective} from "../../shared.directive";

@Component({
  selector: 'app-cyber-button',
  templateUrl: './cyber-button.component.html',
  styleUrls: ['./cyber-button.component.scss']
})
export class CyberButtonComponent extends SharedDirective{

  constructor(private _router: Router) {
    super()
  }

  navigateBy(path: string): void {
    this._router.navigate([`${path}`])
  }
}

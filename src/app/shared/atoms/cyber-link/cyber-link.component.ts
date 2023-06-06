import { Component } from '@angular/core';
import { SharedDirective } from '../../shared.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber-link',
  templateUrl: './cyber-link.component.html',
  styleUrls: ['./cyber-link.component.scss']
})
export class CyberLinkComponent extends SharedDirective{
  constructor( private _router: Router) {
    super()
  }

  navigateBy(path: string): void {
    this._router.navigate([`${path}`])
  }
}

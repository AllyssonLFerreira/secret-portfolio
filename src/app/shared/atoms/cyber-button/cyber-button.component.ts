import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber-button',
  templateUrl: './cyber-button.component.html',
  styleUrls: ['./cyber-button.component.scss']
})
export class CyberButtonComponent {
  @Input() text!: string;
  @Input() path: any;

  constructor(private _router: Router) {}

  navigateBy(path: string): void {
    this._router.navigate([`${path}`])
  }
}

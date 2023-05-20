import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber-link',
  templateUrl: './cyber-link.component.html',
  styleUrls: ['./cyber-link.component.scss']
})
export class CyberLinkComponent {
  
  @Input() text!: string;
  @Input() path: any;

  constructor(private _router: Router) {}

  navigateBy(path: string): void {
    this._router.navigate([`${path}`])
  }
}

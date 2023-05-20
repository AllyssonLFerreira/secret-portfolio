import { Component, Input } from '@angular/core';
import { SharedDirective } from '../../shared.directive';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends SharedDirective {
  @Input() previous!: string;
  @Input() previousPath!: any;
  @Input() next!: string;
  @Input() nextPath!: any;
 
  constructor() {
    super()
  }
}

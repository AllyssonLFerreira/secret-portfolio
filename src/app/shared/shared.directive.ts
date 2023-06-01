import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appShared]'
})
export class SharedDirective {
  constructor() { }

  @Input() text!: string;
  @Input() title!: string;
  @Input() img!: string | null
  @Input() path: any;
  @Input() progress!: number | string;
  @Input() value!: string;
  }

import {Component, Input} from '@angular/core';
import {SharedDirective} from "../../shared.directive";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends SharedDirective {

  @Input() tableDataWithProgress!: { description: string; value: number | string }[];
  @Input() tableData!: { description: string; value: string | number }[];

  constructor() {
    super();
  }
}

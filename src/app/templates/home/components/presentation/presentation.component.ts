import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Flow} from "../../../../integration/model/Flow.model";
import {FlowStore} from "../../../../integration/store/flow.store";
import {PresentationStore} from "../../../../integration/store/home/presentation.store";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {

  state$!: Observable<Flow | undefined>;
  subs!: Subscription;

  constructor( private _HTTP: HttpClient,
               private _FLOW: FlowStore,
               private _PRESENTATION: PresentationStore) {
    this.state$ = this._FLOW.getState()
  }

  ngOnInit() {
    this.subs = this._PRESENTATION.fetchState()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  downloadPDF(): void {
    this._HTTP
      .get('assets/pdf/allysson-ferreira.pdf', {responseType: 'blob'})
      .subscribe((response: any) => {
        const blob = new Blob([response], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download =  'allysson-ferreira.pdf';
        link.click();
      })
  }
}


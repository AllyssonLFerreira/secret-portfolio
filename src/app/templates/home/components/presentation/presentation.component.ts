import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, map, Observable, of, Subscription, take} from "rxjs";
import {Flow} from "../../../../integration/model/Flow.model";
import {FlowStore} from "../../../../integration/store/flow.store";
import {PresentationStore} from "../../../../integration/store/home/presentation.store";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild("textElement") textElement!: ElementRef;

  state$!: Observable<Flow | undefined>;
  subs!: Subscription;
  textPresentation!: string[] | undefined;

  constructor( private _HTTP: HttpClient,
               private _FLOW: FlowStore,
               private _PRESENTATION: PresentationStore) {
    this.state$ = this._FLOW.getState()
  }

  writeTextInTypewriterStyle(text: string): Observable<string> {
    const typingSpeed = 50; // Velocidade da digitação (em milissegundos)

    return interval(typingSpeed).pipe(
      take(text.length),
      map((index: number) => text.slice(0, index + 1))
    );
  }

  ngOnInit() {
    this.subs = this._PRESENTATION.fetchState()
  }

  ngAfterViewInit(): void {

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


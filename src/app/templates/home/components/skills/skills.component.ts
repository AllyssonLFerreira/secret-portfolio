import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SkillsStore} from "../../../../integration/store/home/skills.store";
import {FlowStore} from "../../../../integration/store/flow.store";
import {Observable, Subscription} from "rxjs";
import {Flow} from "../../../../integration/model/Flow.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnInit, OnDestroy {

  subs!: Subscription;
  state$: Observable<Flow | undefined>
  constructor(private _SKILLS: SkillsStore,
              private _FLOW: FlowStore) {
    this.state$ = this._FLOW.getState()
  }

  ngOnInit(): void {
    this.subs = this._SKILLS.fetchState()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngAfterViewInit(): void {
    /*const typewriterElements = document.querySelectorAll('.typewriter');
    console.log(typewriterElements)
    const typewriterArray = Array.from(typewriterElements) as HTMLElement[];

    for (const elm of typewriterArray) {
      const text = elm.innerText;

      // clear text
      elm.innerText = '';

      let i = 0;

      const t = setInterval(() => {
        elm.innerText = text.substr(0, i);

        i++;

        if (i > text.length) {
          clearInterval(t);
        }
      }, 20);
    }*/
  }
}

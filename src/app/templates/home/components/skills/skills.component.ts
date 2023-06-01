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
export class SkillsComponent implements OnInit, OnDestroy {

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
}

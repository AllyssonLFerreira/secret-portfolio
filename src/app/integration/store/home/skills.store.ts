import {Flow} from "../../model/Flow.model";
import {Injectable} from "@angular/core";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {FlowStore} from "../flow.store";
import {Observable, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {SkillsService} from "../../services/home/skills/skills.service";

export interface SkillsState {
  content?: Flow;
}

const initialState: SkillsState = { }

@Injectable()
export class SkillsStore extends ComponentStore<SkillsState>{

  constructor(private _SERVICE: SkillsService,
              private _FLOW: FlowStore) {
    super(initialState);
  }

  readonly fetchState = this.effect((content$: Observable<void>) => {
    return content$.pipe(
      switchMap(() => this._SERVICE.fetch().pipe(
        tapResponse((state) => {
            this._FLOW.setContent(state)
          },
          (error: HttpErrorResponse) => console.error('erro:', error))
      ))
    )
  })
}

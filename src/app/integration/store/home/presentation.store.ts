import {Observable, switchMap} from "rxjs";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {HttpErrorResponse} from "@angular/common/http";
import {Flow} from "../../model/Flow.model";
import {Injectable} from "@angular/core";
import {PresentationService} from "../../services/home/presentation/presentation.service";
import {FlowStore} from "../flow.store";

export interface PresentationState {
  content?: Flow;
}

const initialState: PresentationState = { }

@Injectable()
export class PresentationStore extends ComponentStore<PresentationState>{

  constructor(private _SERVICE: PresentationService,
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



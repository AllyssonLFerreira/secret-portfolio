import {Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {Observable} from "rxjs";
import {Flow} from "../model/Flow.model";

export interface FlowState {
  content?: Flow;
}

const initialState: FlowState = { }

@Injectable()
export class FlowStore extends ComponentStore<FlowState> {
  constructor() {
    super(initialState);
  }

  readonly setContent = this.updater(
    (state, content: Flow | undefined) => {
    return { ...state, content}
  })

  getState(): Observable<Flow | undefined> {
    return this.select((state) => state.content)
  }
}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {FlowStore} from "./flow.store";
import {PresentationStore} from "./home/presentation.store";
import {SkillsStore} from "./home/skills.store";

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  providers: [
    FlowStore,
    PresentationStore,
    SkillsStore
  ]
})
export class StoreRootModule { }

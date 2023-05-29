import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flow} from "../../../model/Flow.model";

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  DB_URL: string = "assets/api/presentation-db.json";
  constructor(private _HTTP: HttpClient) { }

  fetch(): Observable<Flow> {
    return this._HTTP.get<Flow>(`${this.DB_URL}`)
  }
}



/*export class HomeService {

  URL: string = "assets/api/db.json";

  constructor(private _HTTP: HttpClient) { }

  fetch(): Observable<Flow> {
    return this._HTTP.get<Flow>(`${this.URL}`)
  }
}*/

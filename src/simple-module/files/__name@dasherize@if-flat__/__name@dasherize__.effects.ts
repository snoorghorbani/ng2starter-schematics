import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";

import { <%= classify(name) %>Service } from "./services";

@Injectable()
export class <%= classify(name) %>Effects {
	constructor(private actions$: Actions<any>, private router: Router, private service: <%= classify(name) %>Service) { }
}

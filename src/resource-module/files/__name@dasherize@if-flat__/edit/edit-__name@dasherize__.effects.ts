import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError } from "rxjs/operators";

import { <%= classify(name) %>Service } from "../services";
import { Edit<%= classify(name) %>ApiModel } from "../models";
import {
	Edit<%= classify(name) %>ActionTypes,
	Edit<%= classify(name) %>StartAction,
	Edit<%= classify(name) %>SucceedAction,
	Edit<%= classify(name) %>FailedAction
} from "./edit-role.actions";
import { Update<%= classify(name) %>Action } from "../main-container";

@Injectable()
export class Edit<%= classify(name) %>Effects {
	constructor(private actions$: Actions<any>, private router: Router, private service: <%= classify(name) %>Service) { }

	@Effect()
	Edit<%= classify(name) %>$ = this.actions$
		.ofType(Edit<%= classify(name) %>ActionTypes.EDIT)
		.pipe(
			map(action => action.payload),
			map(data => new Edit<%= classify(name) %>StartAction(data))
		)

	@Effect()
	Edit<%= classify(name) %>Start$ = this.actions$
		.ofType(Edit<%= classify(name) %>ActionTypes.START)
		.pipe(
			map(action => action.payload),
			switchMap((data: Edit<%= classify(name) %>ApiModel.Request) => this.service.update(data)),
			map(roleSchema => new Edit<%= classify(name) %>SucceedAction(roleSchema)),
			catchError(() => Observable.of(new Edit<%= classify(name) %>FailedAction())))

	@Effect()
	Update<%= classify(name) %>sListStart$ = this.actions$
		.ofType(Edit<%= classify(name) %>ActionTypes.SUCCEED)
		.pipe(
			map(action => action.payload),
			map(roleSchema => new Update<%= classify(name) %>Action(roleSchema))
		)
}

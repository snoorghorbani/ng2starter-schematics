import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { <%= classify(name) %>Service } from "../services";
import { Add<%= classify(name) %>ApiModel } from "../models";
import { Add<%= classify(name) %>ActionTypes, Add<%= classify(name) %>StartAction, Add<%= classify(name) %>SucceedAction, Add<%= classify(name) %>FailedAction } from "./add-role.actions";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class Add<%= classify(name) %>Effects {
	constructor(private actions$: Actions<any>, private router: Router, private service: <%= classify(name) %>Service) { }

	@Effect()
	Add<%= classify(name) %>$ = this.actions$
		.ofType(Add<%= classify(name) %>ActionTypes.ADD)
		.pipe(
			map(action => action.payload),
			map((data) => new Add<%= classify(name) %>StartAction(data))
		);

	@Effect()
	Add<%= classify(name) %>Start$ = this.actions$
		.ofType(Add<%= classify(name) %>ActionTypes.START)
		.pipe(
			map(action => action.payload),
			switchMap((data: Add<%= classify(name) %>ApiModel.Request) => this.service.add(data)),
			map((res) => new Add<%= classify(name) %>SucceedAction(res)),
			catchError(() => Observable.of(new Add<%= classify(name) %>FailedAction()))
		);
}

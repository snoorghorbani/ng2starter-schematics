import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { switchMap, map, catchError } from "rxjs/operators";

import { <%= classify(name) %>Service } from "../services";
import { <%= classify(name) %>Model } from "../models";
import {
	<%= classify(name) %>sListAction,
	<%= classify(name) %>sListActionTypes,
	<%= classify(name) %>sListActions,
	<%= classify(name) %>sListFailedAction,
	<%= classify(name) %>sListStartAction,
	<%= classify(name) %>sListSucceedAction,
	<%= classify(name) %>FechedAction
} from "./main.actions";

@Injectable()
export class <%= classify(name) %>sListEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: <%= classify(name) %>Service) { }

	@Effect()
	EditProfileRequest$ = this.actions$.ofType(<%= classify(name) %>sListActionTypes.ROLES_LIST).map(data => new <%= classify(name) %>sListStartAction());

	@Effect()
	Get<%= classify(name) %>$ = this.actions$
		.ofType(<%= classify(name) %>sListActionTypes.GET_ROLE)
		.pipe(
			map(action => action.payload),
			switchMap(id => this.service.get(id)),
			map(<%= dasherize(name) %> => new <%= classify(name) %>FechedAction(<%= dasherize(name) %>))
		);

	@Effect()
	get_<%= dasherize(name) %>s_list$ = this.actions$
		.ofType(<%= classify(name) %>sListActionTypes.ROLES_LIST_START)
		.pipe(
			switchMap((data: any) => this.service.getList()),
			map(res => new <%= classify(name) %>sListSucceedAction(res)),
			catchError(() => Observable.of(new <%= classify(name) %>sListFailedAction()))
		);
}

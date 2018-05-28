import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { <%= classify(entity) %>Service } from "../../<%= dasherize(entity) %>.service";
import {
	<%= underscore(name).toUpperCase()  %>_ACTION_TYPES,
	<%= classify(name) %>Actions,
	<%= classify(name) %>SucceedAction,
	<%= classify(name) %>FailedAction
} from "./<%= dasherize(name) %>.actions";

@Injectable()
export class <%= classify(name) %>ApiEffects {
	constructor(private actions$: Actions<<%= classify(name) %>Actions>, private service: <%= classify(entity) %>Service) {}

	@Effect()
	start$ = this.actions$
		.ofType(<%= underscore(name).toUpperCase()  %>_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.<%= classify(name) %>()),
			map(res => new <%= classify(name) %>SucceedAction(res)),
			catchError(err => Observable.of(new <%= classify(name) %>FailedAction(err)))
		);
}

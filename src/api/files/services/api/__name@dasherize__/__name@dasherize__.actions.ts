import { Action } from "@ngrx/store";

import { <%= classify(name) %>ApiModel } from "./<%= dasherize(name) %>.model";
import { <%= classify(entity) %>Model } from "../../../models/<%= dasherize(entity) %>.model";

export const enum <%= underscore(name).toUpperCase()  %>_ACTION_TYPES {
	START = "[<%= underscore(name).toUpperCase()  %>][API][<%= classify(name) %>] start",
	SUCCEED = "[<%= underscore(name).toUpperCase()  %>][API][<%= classify(name) %>] succeed",
	FAILED = "[<%= underscore(name).toUpperCase()  %>][API][<%= classify(name) %>] failed"
}

export class <%= classify(name) %>StartAction implements Action {
	readonly type = <%= underscore(name).toUpperCase()  %>_ACTION_TYPES.START;
	constructor(public payload: <%= classify(name) %>ApiModel.Request) {}
}
export class <%= classify(name) %>SucceedAction implements Action {
	readonly type = <%= underscore(name).toUpperCase()  %>_ACTION_TYPES.SUCCEED;
	constructor(public payload: <%= classify(entity) %>Model) {}
}
export class <%= classify(name) %>FailedAction implements Action {
	readonly type = <%= underscore(name).toUpperCase()  %>_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type <%= classify(name) %>Actions = <%= classify(name) %>StartAction | <%= classify(name) %>SucceedAction | <%= classify(name) %>FailedAction;

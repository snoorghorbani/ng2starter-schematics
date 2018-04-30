import { Action } from "@ngrx/store";

import { <%= classify(name) %>Model } from "../models";

export enum Edit<%= classify(name) %>ActionTypes {
	EDIT = "[ROLE][EDIT] PROFILE",
	START = "[ROLE][EDIT] START",
	SUCCEED = "[ROLE][EDIT] SUCCEED",
	FAILED = "[ROLE][EDIT] FAILED"
}

export class Edit<%= classify(name) %>Action implements Action {
	readonly type = Edit<%= classify(name) %>ActionTypes.EDIT;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Edit<%= classify(name) %>StartAction implements Action {
	readonly type = Edit<%= classify(name) %>ActionTypes.START;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Edit<%= classify(name) %>SucceedAction implements Action {
	readonly type = Edit<%= classify(name) %>ActionTypes.SUCCEED;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Edit<%= classify(name) %>FailedAction implements Action {
	readonly type = Edit<%= classify(name) %>ActionTypes.FAILED;
}

export type Edit<%= classify(name) %>Actions = Edit<%= classify(name) %>Action | Edit<%= classify(name) %>StartAction | Edit<%= classify(name) %>SucceedAction | Edit<%= classify(name) %>FailedAction;

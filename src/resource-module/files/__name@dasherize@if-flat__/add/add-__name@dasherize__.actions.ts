import { Action } from "@ngrx/store";

import { <%= classify(name) %>Model } from "../models";

export enum Add<%= classify(name) %>ActionTypes {
	ADD = "[ROLE][ADD] PROFILE",
	START = "[ROLE][ADD] START",
	SUCCEED = "[ROLE][ADD] SUCCEED",
	FAILED = "[ROLE][ADD] FAILED"
}

export class Add<%= classify(name) %>Action implements Action {
	readonly type = Add<%= classify(name) %>ActionTypes.ADD;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Add<%= classify(name) %>StartAction implements Action {
	readonly type = Add<%= classify(name) %>ActionTypes.START;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Add<%= classify(name) %>SucceedAction implements Action {
	readonly type = Add<%= classify(name) %>ActionTypes.SUCCEED;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Add<%= classify(name) %>FailedAction implements Action {
	readonly type = Add<%= classify(name) %>ActionTypes.FAILED;
}

export type Add<%= classify(name) %>Actions = Add<%= classify(name) %>Action | Add<%= classify(name) %>StartAction | Add<%= classify(name) %>SucceedAction | Add<%= classify(name) %>FailedAction;

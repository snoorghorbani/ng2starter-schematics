import { Action } from "@ngrx/store";

import { <%= classify(name) %>Model } from "../models";

export enum <%= classify(name) %>sListActionTypes {
	ROLES_LIST = "[ROLE][LIST] ROLES_LIST",
	ROLES_LIST_START = "[ROLE][LIST] ROLES_LIST_START",
	ROLES_LIST_SUCCEED = "[ROLE][LIST] ROLES_LIST_SUCCEED",
	ROLES_LIST_FAILED = "[ROLE][LIST] ROLES_LIST_FAILED",
	ADD_ROLE = "[ROLE][LIST] ADD_ROLE",
	ROLE_UPDATE = "[ROLE][LIST] ROLE_UPDATE",
	GET_ROLE = "[ROLE][LIST] GET_ROLE",
	ROLE_FETCHED = "[ROLE][LIST] ROLE_FETCHED"
}

export class <%= classify(name) %>sListAction implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLES_LIST;
}
export class <%= classify(name) %>sListStartAction implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLES_LIST_START;
}
export class <%= classify(name) %>sListSucceedAction implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLES_LIST_SUCCEED;
	constructor(public payload: <%= classify(name) %>Model[]) { }
}
export class <%= classify(name) %>sListFailedAction implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLES_LIST_FAILED;
}
export class Update<%= classify(name) %>Action implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLE_UPDATE;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Add<%= classify(name) %>Action implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ADD_ROLE;
	constructor(public payload: <%= classify(name) %>Model) { }
}
export class Get<%= classify(name) %>Action implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.GET_ROLE;
	constructor(public payload: string) { }
}
export class <%= classify(name) %>FechedAction implements Action {
	readonly type = <%= classify(name) %>sListActionTypes.ROLE_FETCHED;
	constructor(public payload: <%= classify(name) %>Model) { }
}

export type <%= classify(name) %>sListActions =
	| <%= classify(name) %>sListAction
	| <%= classify(name) %>sListStartAction
	| <%= classify(name) %>sListSucceedAction
	| <%= classify(name) %>sListFailedAction
	| Update<%= classify(name) %>Action
	| Add<%= classify(name) %>Action
	| Get<%= classify(name) %>Action
	| <%= classify(name) %>FechedAction;

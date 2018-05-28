import { Action } from "@ngrx/store";

import { TestApiModel } from "./test.model";
import { TestModel } from "../../../models/test.model";

export const enum TEST_ACTION_TYPES {
	START = "[TEST][API][test] start",
	SUCCEED = "[TEST][API][test] succeed",
	FAILED = "[TEST][API][test] failed"
}

export class TestStartAction implements Action {
	readonly type = TEST_ACTION_TYPES.START;
	constructor(public payload: TestApiModel.Request) {}
}
export class TestSucceedAction implements Action {
	readonly type = TEST_ACTION_TYPES.SUCCEED;
	constructor(public payload: TestModel) {}
}
export class TestFailedAction implements Action {
	readonly type = TEST_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type TestActions = TestStartAction | TestSucceedAction | TestFailedAction;

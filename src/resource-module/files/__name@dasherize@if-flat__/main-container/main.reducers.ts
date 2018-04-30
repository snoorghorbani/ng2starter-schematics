import { responseStatusTypes } from "@soushians/shared";
import { <%= classify(name) %>Model } from "../models";
import { <%= classify(name) %>sListActionTypes, <%= classify(name) %>sListActions } from "./main.actions";

export interface State {
	status: responseStatusTypes;
	data: <%= classify(name) %>Model[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};
export function reducer(state = initialState, action: <%= classify(name) %>sListActions): State {
	switch (action.type) {
		case <%= classify(name) %>sListActionTypes.ROLES_LIST: {
			return {
				...state,
				status: "dirty"
			};
		}
		case <%= classify(name) %>sListActionTypes.ROLES_LIST_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case <%= classify(name) %>sListActionTypes.ROLES_LIST_SUCCEED: {
			return {
				...state,
				data: action.payload,
				status: "succeed"
			};
		}
		case <%= classify(name) %>sListActionTypes.ROLES_LIST_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case <%= classify(name) %>sListActionTypes.ROLE_UPDATE: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(role => role._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}
		case <%= classify(name) %>sListActionTypes.ADD_ROLE: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(role => role._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}
		case <%= classify(name) %>sListActionTypes.ROLE_FETCHED: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(role => role._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}

		default: {
			return state;
		}
	}
}

export var getStatus = (state: State) => state.status;

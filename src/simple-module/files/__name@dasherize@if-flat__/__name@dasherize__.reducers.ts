// import * as db from "./main-container/main.reducers";

export interface <%= classify(name) %>State {
	// db: db.State;
}

export const <%= classify(name) %>Reducers = {
	// db: db.reducer
};

export interface AppState {
	"<%= dasherize(name) %>": <%= classify(name) %>State;
}
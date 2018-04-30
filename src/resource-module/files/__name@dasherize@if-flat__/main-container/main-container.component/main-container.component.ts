import { Component, OnInit } from "@angular/core";

import { AppState } from "../../role.reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { <%= classify(name) %>Model } from "../../models";
import { <%= classify(name) %>sListAction } from "../../main-container/main.actions";

@Component({
	template: "<router-outlet></router-outlet>"
})
export class MainContainerComponent {
	constructor(private route: ActivatedRoute, private store: Store<AppState>) {
		this.store.dispatch(new <%= classify(name) %>sListAction);
	}
}


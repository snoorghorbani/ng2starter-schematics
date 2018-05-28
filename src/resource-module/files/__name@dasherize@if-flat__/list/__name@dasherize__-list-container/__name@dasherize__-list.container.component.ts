import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { AppState } from "../../<%= dasherize(name) %>.reducers";
import { <%= classify(name) %>Service } from "../../services";
import { <%= classify(name) %>Model } from "../../models";
import { <%= classify(name) %>sListAction } from "../../main-container";

@Component({
	template: `<<%= dasherize(name) %>-list
					[data]="data$">
				</<%= dasherize(name) %>-list>`
})
export class <%= classify(name) %>ListContainerComponent implements OnInit {
	data$: Observable<<%= classify(name) %>Model[]>;
	constructor(public store: Store<AppState>) {
		this.data$ = this.store.select(state => state.<%= dasherize(name) %>.db.data);
	}
	ngOnInit() {
		this.store.dispatch(new <%= classify(name) %>sListAction());
	}
}

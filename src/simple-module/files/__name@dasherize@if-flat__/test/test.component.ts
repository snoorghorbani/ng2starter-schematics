import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { <%= classify(name) %>Service } from "../services";
import { AppState } from "../<%= dasherize(name) %>.reducers";
import { TestStartAction } from "../services/api";

@Component({
	selector: "<%= dasherize(name) %>-test",
	templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit {
	constructor(private service: <%= classify(name) %>Service, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(new TestStartAction(<any>{}));
	}
}

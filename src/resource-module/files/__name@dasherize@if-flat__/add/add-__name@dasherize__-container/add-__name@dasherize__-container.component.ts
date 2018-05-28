import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { AppState } from "../../<%= dasherize(name) %>.reducers";
import { <%= classify(name) %>Model, Add<%= classify(name) %>ApiModel } from "../../models";
import { Add<%= classify(name) %>Action, Update<%= classify(name) %>Action } from "../../main-container";
import { <%= classify(name) %>Service } from "../../services";

@Component({
	template: `<<%= dasherize(name) %>-add 
					[formGroup]="formGroup" 
					(submited)=add($event)
				></<%= dasherize(name) %>-add>`
})
export class Add<%= classify(name) %>ContainerComponent implements OnInit {
	formGroup = Add<%= classify(name) %>ApiModel.Request.formGroup;

	constructor(public store: Store<AppState>, public service: <%= classify(name) %>Service) { }
	ngOnInit() {
		this.store.dispatch(new Add<%= classify(name) %>Action(this.formGroup.value));
	}
	add(<%= dasherize(name) %>: <%= classify(name) %>Model) {
		this.store.dispatch(new Add<%= classify(name) %>Action(<%= dasherize(name) %>));
	}
}

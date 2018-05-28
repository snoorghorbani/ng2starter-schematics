import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../../<%= dasherize(name) %>.reducers";
import { <%= classify(name) %>Model, Edit<%= classify(name) %>ApiModel } from "../../models";
import { <%= classify(name) %>Service } from "../../services";
import { Edit<%= classify(name) %>Action } from "../edit-<%= dasherize(name) %>.actions";
import { Add<%= classify(name) %>ContainerComponent } from "../../add";
import { Get<%= classify(name) %>Action } from "../../main-container";

@Component({
	template: `<edit-<%= dasherize(name) %>
					[formGroup]="formGroup"
					(submited)="update($event)">
				</edit-<%= dasherize(name) %>>`
})
export class Edit<%= classify(name) %>ContainerComponent extends Add<%= classify(name) %>ContainerComponent {
	formGroup = Edit<%= classify(name) %>ApiModel.Request.formGroup;
	constructor(public service: <%= classify(name) %>Service, private route: ActivatedRoute, public store: Store<AppState>) {
		super(store, service);
	}

	ngOnInit() {
		this.route.params
			.map(params => params["<%= id %>"])
			.subscribe(id => this.store.dispatch(new Get<%= classify(name) %>Action(id)));

		this.route.params
			.map(params => params["<%= id %>"])
			.switchMap(id => this.service.select<%= classify(name) %>ById(id))
			.filter(data => data != null)
			.take(1)
			.subscribe(formSchema => {
				this.formGroup.patchValue(formSchema);
			});
	}

	update(data) {
		this.store.dispatch(new Edit<%= classify(name) %>Action(data));
	}
}

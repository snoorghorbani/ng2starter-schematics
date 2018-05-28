import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { <%= classify(name) %>Model } from "../../models";

@Component({
	selector: "<%= dasherize(name) %>-list",
	templateUrl: "./<%= dasherize(name) %>-list.component.html"
})
export class <%= classify(name) %>ListComponent {
	@Input("data") data$: Observable<<%= classify(name) %>Model[]>;
}

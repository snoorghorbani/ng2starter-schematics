import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { <%= classify(name) %>Model, Add<%= classify(name) %>ApiModel } from "../../models";

@Component({
	selector: "<%= dasherize(name) %>-add",
	templateUrl: "./add-<%= dasherize(name) %>.component.html"
})
export class Add<%= classify(name) %>Component {
	@Input() formGroup: FormGroup;
	@Output() submited = new EventEmitter();

	emit() {
		if(!this.formGroup.valid) return;
		this.submited.emit(this.formGroup.value);
	}
}

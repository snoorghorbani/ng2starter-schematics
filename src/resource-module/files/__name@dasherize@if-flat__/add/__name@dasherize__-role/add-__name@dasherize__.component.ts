import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { <%= classify(name) %>Model, Add<%= classify(name) %>ApiModel } from "../../models";

@Component({
	selector: "role-add",
	templateUrl: "./add-role.component.html"
})
export class Add<%= classify(name) %>Component {
	@Input() formGroup: FormGroup;
	@Output() submited = new EventEmitter();

	emit() {
		this.submited.emit(this.formGroup.value);
	}
}

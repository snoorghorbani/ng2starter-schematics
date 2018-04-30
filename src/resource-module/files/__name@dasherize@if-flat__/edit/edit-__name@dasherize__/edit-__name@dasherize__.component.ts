import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute } from "@angular/router";

import { <%= classify(name) %>Model, Edit<%= classify(name) %>ApiModel } from "../../models";
import { <%= classify(name) %>Service } from "../../services";
import { Add<%= classify(name) %>Component } from "../../add";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "edit-role",
	templateUrl: "./edit-role.component.html"
})
export class Edit<%= classify(name) %>Component extends Add<%= classify(name) %>Component {
	emit() {
		if (!this.formGroup.valid) return;
		return this.submited.emit(this.formGroup.value);
	}
}

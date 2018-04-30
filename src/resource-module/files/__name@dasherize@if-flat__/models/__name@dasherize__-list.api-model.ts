import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { <%= classify(name) %>Model } from "./role.model";

export namespace <%= classify(name) %>ListApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Name: string;
		Controls: object[];
		constructor(initValue = {} as <%= classify(name) %>ListApiModel.Request) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				Name: this.Name,
				Controls: this.Controls
			};
		}
		static get formGroup() {
			return new FormGroup({
				Name: new FormControl("", [Validators.required]),
				Controls: new FormGroup({})
			});
		}
	}

	export class Response {
		Result: <%= classify(name) %>Model[];
		constructor() { }
	}
}

import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { <%= classify(name) %>Model } from "./<%= dasherize(name) %>.model";

export namespace Add<%= classify(name) %>ApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		<%= id %>: string;
		name: string;
		form: any[];
		events: any[];
		constructor(initValue = {} as Add<%= classify(name) %>ApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				name: this.name,
				form: this.form,
				events: this.events
			};
		}
		static get formGroup() {
			return new FormGroup({
				<%= id %>: new FormControl("", [Validators.required]),
				name: new FormControl("", [Validators.required]),
				title: new FormControl("", [Validators.required]),
				form: new FormControl({}),
				events: new FormGroup({
					accept: new FormGroup({
						show: new FormControl(false),
						text: new FormControl("ثبت")
					}),
					cancel: new FormGroup({
						show: new FormControl(false),
						text: new FormControl("انصراف")
					})
				})
			});
		}
	}

	export class Response {
		Result: <%= classify(name) %>Model;
		constructor() { }
	}
}

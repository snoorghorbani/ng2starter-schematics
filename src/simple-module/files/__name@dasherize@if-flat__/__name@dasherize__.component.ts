import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-<%= dasherize(name) %>",
	templateUrl: "./<%= dasherize(name) %>.component.html"
})
export class <%= classify(name) %>Component implements OnInit {
	constructor() {}

	ngOnInit() {}
}

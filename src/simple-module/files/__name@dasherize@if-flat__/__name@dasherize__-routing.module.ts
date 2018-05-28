import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { <%= classify(name) %>Component } from "./<%= dasherize(name) %>.component";
import { TestComponent } from "./test";

const routes: Routes = [
	{
		path: "<%= dasherize(name) %>",
		component: <%= classify(name) %>Component,
		children: [
			{
				path: "test",
				component: TestComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

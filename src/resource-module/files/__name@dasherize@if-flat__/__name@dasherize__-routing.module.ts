import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainContainerComponent } from "./main-container";
import { Add<%= classify(name) %>ContainerComponent } from "./add";
import { Edit<%= classify(name) %>ContainerComponent } from "./edit";
import { <%= classify(name) %>ListContainerComponent } from "./list";

const routes: Routes = [
	{
		path: "<%= dasherize(name) %>",
		component: MainContainerComponent,
		children: [
			{
				path: "",
				component: <%= classify(name) %>ListContainerComponent
			},
			{
				path: "add",
				component: Add<%= classify(name) %>ContainerComponent
			},
			{
				path: "edit/:<%= id %>",
				component: Edit<%= classify(name) %>ContainerComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

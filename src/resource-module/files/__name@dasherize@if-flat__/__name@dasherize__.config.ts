import { InjectionToken } from "@angular/core";

export interface <%= classify(name) %>ModuleConfig {
	endpoints: {
		add<%= classify(name) %>: string;
		edit<%= classify(name) %>: string;
		get<%= classify(name) %>: string;
		getList: string;
		delete<%= classify(name) %>: string;
	};
}
export const MODULE_DEFAULT_CONFIG: <%= classify(name) %>ModuleConfig = {
	endpoints: {
		add<%= classify(name) %>: "",
		edit<%= classify(name) %>: "",
		get<%= classify(name) %>: "",
		getList: "",
		delete<%= classify(name) %>: ""
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<<%= classify(name) %>ModuleConfig>("<%= classify(name) %>ModuleConfig");

import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// import { get<%= classify(name) %>ModuleConfig } from "@soushians/config";
import { <%= classify(name) %>ModuleConfig } from "../<%= dasherize(name) %>.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../<%= dasherize(name) %>.config";
import { <%= classify(name) %>State } from "../<%= dasherize(name) %>.reducers";

@Injectable()
export class <%= classify(name) %>ConfigurationService {
	private _config: <%= classify(name) %>ModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<<%= classify(name) %>State>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(get<%= classify(name) %>ModuleConfig).subscribe(userConfig => {
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}

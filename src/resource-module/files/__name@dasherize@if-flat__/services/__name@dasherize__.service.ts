import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { stringTemplate } from "@soushians/infra";

import { <%= classify(name) %>Model, Add<%= classify(name) %>ApiModel, Edit<%= classify(name) %>ApiModel, <%= classify(name) %>ListApiModel } from "../models";
import { <%= classify(name) %>ConfigurationService } from "./role-configuration.service";

import { AppState } from "../role.reducers";

@Injectable()
export class <%= classify(name) %>Service {
	responseCache: Add<%= classify(name) %>ApiModel.Response;

	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: <%= classify(name) %>ConfigurationService
	) { }

	add(data: Add<%= classify(name) %>ApiModel.Request): Observable<<%= classify(name) %>Model> {
		const model = new Add<%= classify(name) %>ApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.add<%= classify(name) %> != "")
			.take(1)
			.switchMap(config => this.http.post(config.endpoints.add<%= classify(name) %>, model.getRequestBody()))
			.map((response: Add<%= classify(name) %>ApiModel.Response) => response.Result);
	}
	get(_id: string): Observable<<%= classify(name) %>Model> {
		return this.configurationService.config$
			.filter(config => config.endpoints.get<%= classify(name) %> != "")
			.take(1)
			.switchMap(config => this.http.get(stringTemplate(config.endpoints.get<%= classify(name) %>, { _id })))
			.map((response: Edit<%= classify(name) %>ApiModel.Response) => response.Result);
	}
	getList(): Observable<<%= classify(name) %>Model[]> {
		debugger;
		return this.configurationService.config$
			// .filter(config => config.endpoints.getList != "")
			// .switchMap(config => this.http.get(config.endpoints.getList))
			// .map((response: <%= classify(name) %>ListApiModel.Response) => response.Result);
			.map(() => ([{ "_id": "22" }, { "_id": "11" }]));
	}
	update(data: Edit<%= classify(name) %>ApiModel.Request): Observable<<%= classify(name) %>Model> {
		const model = new Edit<%= classify(name) %>ApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.edit<%= classify(name) %> != "")
			.take(1)
			.switchMap(config => this.http.put(config.endpoints.edit<%= classify(name) %>, model.getRequestBody()))
			.map((response: Edit<%= classify(name) %>ApiModel.Response) => response.Result);
	}
	delete(_id: string) {
		return this.configurationService.config$
			.filter(config => config.endpoints.delete<%= classify(name) %> != "")
			.switchMap(config => this.http.get(config.endpoints.delete<%= classify(name) %>));
	}
	select<%= classify(name) %>ById(_id: string): Observable<<%= classify(name) %>Model> {
		const subject = new BehaviorSubject<<%= classify(name) %>Model>(undefined);
		this.store
			.select(state => state.role.db.data)
			.filter(roles => roles != null)
			.map(roles => roles.find(role => role._id == _id))
			.subscribe(<%= classify(name) %>Model => subject.next(<%= classify(name) %>Model));
		return subject.asObservable();
	}
}

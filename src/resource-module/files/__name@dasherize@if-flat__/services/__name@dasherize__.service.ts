import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { stringTemplate } from "@soushians/infra";

import { <%= classify(name) %>Model, Add<%= classify(name) %>ApiModel, Edit<%= classify(name) %>ApiModel, <%= classify(name) %>ListApiModel } from "../models";
import { <%= classify(name) %>ConfigurationService } from "./<%= dasherize(name) %>-configuration.service";

import { AppState } from "../<%= dasherize(name) %>.reducers";

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
	get(<%= id %>: string): Observable<<%= classify(name) %>Model> {
		return this.configurationService.config$
			.filter(config => config.endpoints.get<%= classify(name) %> != "")
			.take(1)
			.switchMap(config => this.http.get(stringTemplate(config.endpoints.get<%= classify(name) %>, { <%= id %> })))
			.map((response: Edit<%= classify(name) %>ApiModel.Response) => response.Result);
	}
	getList(): Observable<<%= classify(name) %>Model[]> {
		return this.configurationService.config$
			.filter(config => config.endpoints.getList != "")
			.switchMap(config => this.http.get(config.endpoints.getList))
			.map((response: <%= classify(name) %>ListApiModel.Response) => response.Result);
	}
	update(data: Edit<%= classify(name) %>ApiModel.Request): Observable<<%= classify(name) %>Model> {
		const model = new Edit<%= classify(name) %>ApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.edit<%= classify(name) %> != "")
			.take(1)
			.switchMap(config => this.http.put(config.endpoints.edit<%= classify(name) %>, model.getRequestBody()))
			.map((response: Edit<%= classify(name) %>ApiModel.Response) => response.Result);
	}
	delete(<%= id %>: string) {
		return this.configurationService.config$
			.filter(config => config.endpoints.delete<%= classify(name) %> != "")
			.switchMap(config => this.http.get(config.endpoints.delete<%= classify(name) %>));
	}
	select<%= classify(name) %>ById(<%= id %>: string): Observable<<%= classify(name) %>Model> {
		const subject = new BehaviorSubject<<%= classify(name) %>Model>(undefined);
		this.store
			.select(state => state.<%= dasherize(name) %>.db.data)
			.filter(<%= dasherize(name) %>s => <%= dasherize(name) %>s != null)
			.map(<%= dasherize(name) %>s => <%= dasherize(name) %>s.find(<%= dasherize(name) %> => <%= dasherize(name) %>.<%= id %> == <%= id %>))
			.subscribe(<%= classify(name) %>Model => subject.next(<%= classify(name) %>Model));
		return subject.asObservable();
	}
}

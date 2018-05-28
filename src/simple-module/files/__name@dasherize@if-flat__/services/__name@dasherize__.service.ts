import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { of } from "rxjs/internal/observable/of";

import { stringTemplate } from "@soushians/infra";

import { <%= classify(name) %>Model, TestModel } from "../models";
import { <%= classify(name) %>ConfigurationService } from "./<%= dasherize(name) %>-configuration.service";
import { TestApiMock } from "./mock/test.api-mock";

import { AppState } from "../<%= dasherize(name) %>.reducers";

@Injectable()
export class <%= classify(name) %>Service {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: <%= classify(name) %>ConfigurationService
	) { }

	test(): Observable<TestModel> {
		return of(TestApiMock.Result);
		// const model = new Add<%= classify(name) %>ApiModel.Request(data);
		// return this.configurationService.config$
		// 	.filter(config => config.endpoints.add<%= classify(name) %> != "")
		// 	.take(1)
		// 	.switchMap(config => this.http.post(config.endpoints.add<%= classify(name) %>, model.getRequestBody()))
		// 	.map((response: Add<%= classify(name) %>ApiModel.Response) => response.Result);
	}
}

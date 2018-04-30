import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckbox,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { InfraModule } from "@soushians/infra";

import { <%= classify(name) %>ModuleConfig, MODULE_CONFIG_TOKEN } from "./<%= dasherize(name) %>.config";
import { RoutingModule } from "./<%= dasherize(name) %>-routing.module";
import { MainContainerComponent, <%= classify(name) %>sListEffects } from "./main-container";
import { <%= classify(name) %>Reducers } from "./<%= dasherize(name) %>.reducers";
import { Add<%= classify(name) %>Component, Add<%= classify(name) %>ContainerComponent, Add<%= classify(name) %>Effects } from "./add";
import { Edit<%= classify(name) %>Component, Edit<%= classify(name) %>ContainerComponent, Edit<%= classify(name) %>Effects } from "./edit";
import { <%= classify(name) %>Service, <%= classify(name) %>ConfigurationService } from "./services";
import { <%= classify(name) %>ListComponent, <%= classify(name) %>ListContainerComponent } from "./list";

@NgModule({
	imports: [
		HttpClientModule,
		InfraModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatTableModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		Edit<%= classify(name) %>ContainerComponent,
		Edit<%= classify(name) %>Component,
		<%= classify(name) %>ListContainerComponent,
		<%= classify(name) %>ListComponent,
		Add<%= classify(name) %>ContainerComponent,
		MainContainerComponent,
		Add<%= classify(name) %>Component,
	],
	entryComponents: [
	],
	exports: []
})
export class <%= classify(name) %>Module {
	static forRoot(config?: <%= classify(name) %>ModuleConfig): ModuleWithProviders {
		return {
			ngModule: Root<%= classify(name) %>Module,
			providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, <%= classify(name) %>Service, <%= classify(name) %>ConfigurationService]
		};
	}
}

@NgModule({
	imports: [
		<%= classify(name) %>Module,
		StoreModule.forFeature("<%= dasherize(name) %>", <%= classify(name) %>Reducers),
		EffectsModule.forFeature([Add<%= classify(name) %>Effects, Edit<%= classify(name) %>Effects]),
		RoutingModule
	],
	exports: [<%= classify(name) %>Module]
})
export class Root<%= classify(name) %>Module { }

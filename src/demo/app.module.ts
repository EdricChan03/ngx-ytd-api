import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxYtdApiService } from 'ngx-ytd-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DemoVideosComponent } from './demos/demo-videos/demo-videos.component';
import { DemoHomeComponent } from './demos/demo-home/demo-home.component';
import { DemoSearchComponent } from './demos/demo-search/demo-search.component';

import { ListsService } from './lists.service';

import { AppRouting } from './app.routing';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';
import { SharedService } from './shared.service';
import { VersionPickerModule } from './shared/version-picker/version-picker.module';
import { SharedModule } from './shared.module';


@NgModule({
	declarations: [
		AppComponent,
		DemoVideosComponent,
		DemoHomeComponent,
		DemoSearchComponent,
		DocsHomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MaterialModule,
		AppRouting,
		FlexLayoutModule,
		VersionPickerModule,
		SharedModule
	],
	providers: [
		NgxYtdApiService,
		ListsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

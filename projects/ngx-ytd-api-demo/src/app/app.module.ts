import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxYtdApiCommentsModule } from 'ngx-ytd-api/comments';
import { NgxYtdApiSearchModule } from 'ngx-ytd-api/search';
import { NgxYtdApiVideosModule } from 'ngx-ytd-api/videos';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DemoVideosListComponent } from './demos/videos/list/demo-videos-list.component';
import { DemoHomeComponent } from './demos/home/demo-home.component';
import { DemoSearchListComponent } from './demos/search/list/demo-search-list.component';

import { ListsService } from './lists.service';

import { AppRouting } from './app.routing';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';
import { SharedService } from './shared.service';
import { VersionPickerModule } from './shared/version-picker/version-picker.module';
import { SharedModule } from './shared.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CallbackComponent } from './callback/callback.component';
import { RoutingStateService } from './routingstate.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoVideosListComponent,
    DemoHomeComponent,
    DemoSearchListComponent,
    DocsHomeComponent,
    PrivacyPolicyComponent,
    CallbackComponent
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
    SharedModule,
    NgxYtdApiCommentsModule,
    NgxYtdApiSearchModule,
    NgxYtdApiVideosModule
  ],
  providers: [
    ListsService,
    SharedService,
    RoutingStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

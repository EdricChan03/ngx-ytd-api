import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';
import { NgxYtdApiCommentService } from 'ngx-ytd-api/comments';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DemoVideosComponent } from './demos/videos/demo-videos.component';
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

const YTD_API_DEMO_SERVICES = [
  NgxYtdApiCommentService,
  NgxYtdApiSearchService
];

@NgModule({
  declarations: [
    AppComponent,
    DemoVideosComponent,
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
    SharedModule
  ],
  providers: [
    YTD_API_DEMO_SERVICES,
    ListsService,
    SharedService,
    RoutingStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

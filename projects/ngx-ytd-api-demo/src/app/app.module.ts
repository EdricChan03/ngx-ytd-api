import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxYtdApiCommentsModule } from 'ngx-ytd-api/comments';
import { NgxYtdApiSearchModule } from 'ngx-ytd-api/search';
import { NgxYtdApiVideosModule } from 'ngx-ytd-api/videos';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CallbackComponent } from './callback/callback.component';
import { DemoHomeComponent } from './demos/home/demo-home.component';
import { DemoSearchListComponent } from './demos/search/list/demo-search-list.component';
import { DemoVideosGetRatingComponent } from './demos/videos/getRating/demo-videos-get-rating.component';
import { DemoVideosListComponent } from './demos/videos/list/demo-videos-list.component';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';
import { ListsService } from './lists.service';
import { MaterialModule } from './material.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RoutingStateService } from './routingstate.service';
import { SharedModule } from './shared.module';
import { SharedService } from './shared.service';
import { VersionPickerModule } from './shared/version-picker/version-picker.module';
import { YtVideoPickerModule } from './shared/yt-video-picker/yt-video-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoSearchListComponent,
    DemoVideosGetRatingComponent,
    DemoVideosListComponent,
    DemoHomeComponent,
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
    YtVideoPickerModule,
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

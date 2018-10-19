import { NgModule } from '@angular/core';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    NgxYtdApiCoreService,
    NgxYtdApiVideosService
  ]
})
export class NgxYtdApiVideosModule { }

import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule } from 'ngx-ytd-api/common';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';

@NgModule({
  imports: [
    NgxYtdApiCommonModule
  ],
  providers: [
    NgxYtdApiVideosService
  ]
})
export class NgxYtdApiVideosModule { }

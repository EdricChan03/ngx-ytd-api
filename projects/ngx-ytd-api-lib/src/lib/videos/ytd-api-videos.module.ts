import { NgModule } from '@angular/core';
import { NgxYtdApiCoreModule } from 'ngx-ytd-api/core';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';

@NgModule({
  imports: [
    NgxYtdApiCoreModule
  ],
  providers: [
    NgxYtdApiVideosService
  ]
})
export class NgxYtdApiVideosModule { }

import { NgModule } from '@angular/core';
import { SimpleHttpModule } from 'ngx-simple-http';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';

@NgModule({
  imports: [
    SimpleHttpModule
  ],
  providers: [
    NgxYtdApiVideosService
  ]
})
export class NgxYtdApiVideosModule { }

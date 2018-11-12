import { NgModule } from '@angular/core';
import { NgxYtdApiCoreModule } from 'ngx-ytd-api/core';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';

@NgModule({
  imports: [
    NgxYtdApiCoreModule
  ],
  providers: [
    NgxYtdApiCommentsService
  ]
})
export class NgxYtdApiCommentsModule { }

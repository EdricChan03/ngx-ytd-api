import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';
@NgModule({
  imports: [
    NgxYtdApiCommonModule
  ],
  providers: [
    NgxYtdApiCommentsService
  ]
})
export class NgxYtdApiCommentsModule { }

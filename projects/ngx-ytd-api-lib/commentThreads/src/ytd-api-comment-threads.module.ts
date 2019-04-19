import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentThreadsService } from './ytd-api-comment-threads.service';

@NgModule({
  providers: [
    NgxYtdApiCommentThreadsService
  ],
  imports: [
    NgxYtdApiCommonModule
  ]
})
export class NgxYtdApiCommentThreadsModule { }

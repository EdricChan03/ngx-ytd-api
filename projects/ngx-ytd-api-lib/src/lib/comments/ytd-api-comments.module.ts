import { NgModule } from '@angular/core';
import { NgxYtdApiCommentService } from './ytd-api-comments.service';
import { NgxYtdApiCoreModule } from 'ngx-ytd-api/core';

@NgModule({
  imports: [
    NgxYtdApiCoreModule
  ],
  providers: [
    NgxYtdApiCommentService
  ]
})
export class NgxYtdApiCommentsModule { }

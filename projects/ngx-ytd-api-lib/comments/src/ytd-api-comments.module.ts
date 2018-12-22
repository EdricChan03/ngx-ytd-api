import { NgModule } from '@angular/core';
import { SimpleHttpModule } from 'ngx-simple-http';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';

@NgModule({
  imports: [
    SimpleHttpModule
  ],
  providers: [
    NgxYtdApiCommentsService
  ]
})
export class NgxYtdApiCommentsModule { }

import { NgModule } from '@angular/core';
import { NgxYtdApiCommonService } from './ytd-api-common.service';
import { SimpleHttpModule } from 'ngx-simple-http';

@NgModule({
  imports: [
    SimpleHttpModule
  ],
  providers: [
    NgxYtdApiCommonService
  ]
})
export class NgxYtdApiCommonModule { }

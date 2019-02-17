import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule } from 'ngx-ytd-api/common';
import { NgxYtdApiSearchService } from './ytd-api-search.service';

@NgModule({
  imports: [
    NgxYtdApiCommonModule
  ],
  providers: [
    NgxYtdApiSearchService
  ]
})
export class NgxYtdApiSearchModule { }

import { NgModule } from '@angular/core';
import { NgxYtdApiCoreModule } from 'ngx-ytd-api/core';
import { NgxYtdApiSearchService } from './ytd-api-search.service';

@NgModule({
  imports: [
    NgxYtdApiCoreModule
  ],
  providers: [
    NgxYtdApiSearchService
  ]
})
export class NgxYtdApiSearchModule { }

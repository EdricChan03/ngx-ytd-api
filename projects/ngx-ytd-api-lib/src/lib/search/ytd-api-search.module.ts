import { NgModule } from '@angular/core';
import { NgxYtdApiSearchService } from './ytd-api-search.service';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    NgxYtdApiCoreService,
    NgxYtdApiSearchService
  ]
})
export class NgxYtdApiSearchModule { }

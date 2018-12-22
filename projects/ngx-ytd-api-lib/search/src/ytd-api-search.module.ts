import { NgModule } from '@angular/core';
import { SimpleHttpModule } from 'ngx-simple-http';
import { NgxYtdApiSearchService } from './ytd-api-search.service';

@NgModule({
  imports: [
    SimpleHttpModule
  ],
  providers: [
    NgxYtdApiSearchService
  ]
})
export class NgxYtdApiSearchModule { }

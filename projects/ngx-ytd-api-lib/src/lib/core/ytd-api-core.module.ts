import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxYtdApiCoreService } from './ytd-api-core.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    NgxYtdApiCoreService
  ]
})
export class NgxYtdApiCoreModule { }

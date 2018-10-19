import { NgModule } from '@angular/core';
import { NgxYtdApiCoreService } from './ytd-api-core.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    NgxYtdApiCoreService
  ]
})
export class NgxYtdApiCoreModule { }

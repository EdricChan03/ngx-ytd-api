import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NgxYtdApiStandardParams, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiSearchService } from './ytd-api-search.service';

@NgModule({
  imports: [
    NgxYtdApiCommonModule
  ],
  providers: [
    NgxYtdApiSearchService
  ]
})
export class NgxYtdApiSearchModule {
  /**
   * Returns the module with the specified standard parameters
   * @param defaultParams The default standard parameters
   * @returns The module with the specified standard parameters
   */
  static forRoot(
    defaultParams: NgxYtdApiStandardParams
  ): ModuleWithProviders {
    return {
      ngModule: NgxYtdApiSearchModule,
      providers: [
        { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
      ]
    };
  }
}

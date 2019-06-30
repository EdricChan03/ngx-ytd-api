import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NgxYtdApiStandardParams, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';

@NgModule({
  imports: [
    NgxYtdApiCommonModule
  ],
  providers: [
    NgxYtdApiVideosService
  ]
})
export class NgxYtdApiVideosModule {
  /**
   * Returns the module with the specified standard parameters
   * @param defaultParams The default standard parameters
   * @returns The module with the specified standard parameters
   */
  static forRoot(
    defaultParams: NgxYtdApiStandardParams
  ): ModuleWithProviders {
    return {
      ngModule: NgxYtdApiVideosModule,
      providers: [
        { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
      ]
    };
  }
}

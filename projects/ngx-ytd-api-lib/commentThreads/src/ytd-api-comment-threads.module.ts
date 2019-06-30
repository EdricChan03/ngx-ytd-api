import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NgxYtdApiStandardParams, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentThreadsService } from './ytd-api-comment-threads.service';

@NgModule({
  providers: [
    NgxYtdApiCommentThreadsService
  ],
  imports: [
    NgxYtdApiCommonModule
  ]
})
export class NgxYtdApiCommentThreadsModule {
  /**
   * Returns the module with the specified standard parameters
   * @param defaultParams The default standard parameters
   * @returns The module with the specified standard parameters
   */
  static forRoot(
    defaultParams: NgxYtdApiStandardParams
  ): ModuleWithProviders {
    return {
      ngModule: NgxYtdApiCommentThreadsModule,
      providers: [
        { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
      ]
    };
  }
}

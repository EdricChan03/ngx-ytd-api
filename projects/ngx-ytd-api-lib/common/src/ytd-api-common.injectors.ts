import { InjectionToken } from '@angular/core';
import { NgxYtdApiStandardOpts } from './ytd-api-common.interface';

/** Injection token that can be used to specify the APi's standard options. */
export const NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = new InjectionToken<NgxYtdApiStandardOpts>('ngx-ytd-api-default-standard-opts');

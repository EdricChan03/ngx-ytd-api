import { InjectionToken } from '@angular/core';
import { NgxYtdApiStandardParams } from './ytd-api-common.interface';

/** Injection token that can be used to specify the standard query parameters for all API endpoints. */
export const NGX_YTD_API_DEFAULT_STANDARD_PARAMS = new InjectionToken<NgxYtdApiStandardParams>('ngx-ytd-api-default-standard-params');

/**
 * Injection token that can be used to specify the standard query parameters for all API endpoints.
 * @deprecated Use {@link NGX_YTD_API_DEFAULT_STANDARD_PARAMS}
 */
export const NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = NGX_YTD_API_DEFAULT_STANDARD_PARAMS;

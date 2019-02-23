import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleHttpService } from 'ngx-simple-http';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from './ytd-api-common.injectors';
import { NgxYtdApiStandardOpts } from './ytd-api-common.interface';

@Injectable()
export class NgxYtdApiCommonService {
  constructor(
    private http: SimpleHttpService,
    @Inject(NGX_YTD_API_DEFAULT_STANDARD_OPTIONS) @Optional() private defaultOptions: NgxYtdApiStandardOpts
  ) { }
  /**
   * Checks for the following:
   * 1. The `key` exists in `obj`
   * 2. The key-value of `key` in `obj` is not `null`
   * @param obj The object to check
   * @param key The key to check for in `obj`
   * @template O The TypeScript interface to type `obj` against
   * @returns `true` if all conditions are met, `false` otherwise
   */
  private keyValueExistsAndNonNull<O extends Object>(obj: O, key: string): boolean {
    return key in obj && typeof obj[key] !== null;
  }
  /**
   * Merges an API request's options with the default standard options as
   * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
   * @param opts The API request's options
   * @template T A TypeScript interface to type `opts` against
   * @returns The merged API request's options
   * @deprecated Use {@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
   */
  mergeOpts<T extends any>(opts: T): T & NgxYtdApiStandardParams {
    return this.mergeParamsWithStandardParams<T>(opts);
  }
  /**
   * Merges an API request's parameters with the default standard parameters as
   * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
   * @param opts The API request's options
   * @template T A TypeScript interface to type `opts` against
   * @returns The merged API request's options
   */
  mergeParamsWithStandardParams<T extends any>(opts: T): T & NgxYtdApiStandardParams {
    if (this.defaultOptions) {
      return { ...opts, ...this.defaultOptions };
    } else {
      return opts;
    }
  }
  /**
   * Sends a HTTP request to the specified `apiEndpoint`
   * @param apiEndpoint The API endpoint to send a HTTP request to
   * @param opts Options to append to the endpoint as URL queries
   * @param body The body of the HTTP request
   * @param httpType The type of HTTP request to send
   * @template B A TypeScript interface to type the HTTP request's body to
   * @template P A TypeScript interface to type the HTTP request's parameters to
   * @template R A TypeScript interface to type the HTTP request's result to
   * @returns The result of the HTTP request
   */
  sendHttpRequest<B extends any, P extends any, R extends any>(
    apiEndpoint: string,
    opts: P,
    body: B = null,
    httpType: 'delete' | 'get' | 'post' | 'put'
  ): Observable<R> {
    let headers: HttpHeaders;
    if (this.keyValueExistsAndNonNull<P>(opts, 'accessToken')) {
      if (this.keyValueExistsAndNonNull<P>(opts, 'accessTokenUsesParam') && opts['accessTokenUsesParam']) {
        // Using parameter
        opts['access_token'] = opts['accessToken'];
        delete opts['accessToken'];
        // We don't want to pass this to the actual API endpoint
        delete opts['accessTokenUsesParam'];
      } else {
        // Using HTTP headers
        headers = new HttpHeaders()
          .set('Authorization', `Bearer ${opts['accessToken']}`);
      }
    }
    switch (httpType) {
      case 'delete':
        if (headers) {
          return this.http.createHttpDelete<P, R>(apiEndpoint, opts, headers);
        } else {
          return this.http.createHttpDelete<P, R>(apiEndpoint, opts);
        }
      case 'get':
        if (headers) {
          return this.http.createHttpGet<P, R>(apiEndpoint, opts, headers);
        } else {
          return this.http.createHttpGet<P, R>(apiEndpoint, opts);
        }
      case 'post':
        if (headers) {
          if (body) {
            return this.http.createHttpPost<B, P, R>(apiEndpoint, opts, body, headers);
          } else {
            return this.http.createHttpPost<B, P, R>(apiEndpoint, opts, null, headers);
          }
        } else {
          if (body) {
            return this.http.createHttpPost<B, P, R>(apiEndpoint, opts, body);
          } else {
            return this.http.createHttpPost<B, P, R>(apiEndpoint, opts, null);
          }
        }
      case 'put':
        if (headers) {
          if (body) {
            return this.http.createHttpPut<B, P, R>(apiEndpoint, opts, body, headers);
          } else {
            return this.http.createHttpPut<B, P, R>(apiEndpoint, opts, null, headers);
          }
        } else {
          if (body) {
            return this.http.createHttpPut<B, P, R>(apiEndpoint, opts, body);
          } else {
            return this.http.createHttpPut<B, P, R>(apiEndpoint, opts, null);
          }
        }
    }
  }
}

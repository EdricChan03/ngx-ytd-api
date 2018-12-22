import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
import { SimpleHttpService } from 'ngx-simple-http';

@Injectable()
export class NgxYtdApiSearchService {
  constructor(
    private http: SimpleHttpService
  ) { }
  /**
   * The API URL for the Search API of the YouTube Data v3 API
   */
  readonly ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
  // Handler for HTTP requests
  private _httpHandler<B extends any, P extends any, R extends any>(
    apiEndpoint: string,
    opts: P,
    body: B = null,
    httpType: 'delete' | 'get' | 'post' | 'put'
  ): Observable<R> {
    let headers: HttpHeaders;
    if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
      headers = new HttpHeaders()
        .set('Authorization', `Bearer ${opts['accessToken']}`);
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
  /**
   * Returns a collection of search results that match the query parameters specified
   *
   * See https://developers.google.com/youtube/v3/docs/search/list for more info
   * @param opts API parameters for the API
   * @return Results of the search has an `Observable`
   */
  list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult> {
    return this._httpHandler<any, NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult>(
      this.ngxYtdSearchApiUrl,
      opts,
      null,
      'get'
    );
  }
}

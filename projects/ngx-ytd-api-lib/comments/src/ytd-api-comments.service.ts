import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { Observable } from 'rxjs';
import {
  NgxYtdApiCommentsDeleteOpts,
  NgxYtdApiCommentsInsertOpts,
  NgxYtdApiCommentsListOpts,
  NgxYtdApiCommentsListResult,
  NgxYtdApiCommentsMarkAsSpamOpts,
  NgxYtdApiCommentsResource,
  NgxYtdApiCommentsSetModerationStatusOpts,
  NgxYtdApiCommentsUpdateOpts
} from './ytd-api-comments.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiCommentsService {
  constructor(
    private http: SimpleHttpService
  ) { }
  /**
   * The API URL for the Comments API of the YouTube Data v3 API
   */
  readonly ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
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
   * Deletes a comment
   *
   * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
   * @param opts Options for the API
   * @return Results of the deletion as an `Observable`
   */
  delete(opts: NgxYtdApiCommentsDeleteOpts): Observable<any> {
    return this._httpHandler<any, NgxYtdApiCommentsDeleteOpts, any>(
      this.ngxYtdCommentsApiUrl,
      opts,
      null,
      'delete'
    );
  }
  /**
   * Creates a reply to an existing comment
   *
   * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
   * @param body The API body
   * @param opts Options for the API
   * @return Results of the creation as an `Observable`
   */
  insert(body: NgxYtdApiCommentsResource, opts: NgxYtdApiCommentsInsertOpts): Observable<any> {
    return this._httpHandler<NgxYtdApiCommentsResource, NgxYtdApiCommentsInsertOpts, any>(
      this.ngxYtdCommentsApiUrl,
      opts,
      body,
      'post'
    );
  }
  /**
   * Retrieves comments
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list for more info
   * @param opts Options for the API
   * @return Results of the request as an `Observable`
   */
  list(opts: NgxYtdApiCommentsListOpts): Observable<NgxYtdApiCommentsListResult> {
    return this._httpHandler<any, NgxYtdApiCommentsListOpts, NgxYtdApiCommentsListResult>(
      this.ngxYtdCommentsApiUrl,
      opts,
      null,
      'get'
    );
  }
  /**
   * Flags one or more comments as spam
   *
   * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
   * @param opts Options for the API
   * @return Results of the request as an `Observable`
   */
  markAsSpam(opts: NgxYtdApiCommentsMarkAsSpamOpts): Observable<any> {
    return this._httpHandler<any, NgxYtdApiCommentsMarkAsSpamOpts, any>(
      `${this.ngxYtdCommentsApiUrl}/markAsSpam`,
      opts,
      null,
      'post'
    );
  }
  /**
   * Sets the moderation status of one or more comments
   *
   * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
   * @param opts Options for the API
   * @return Results of the request as an `Observable`
   */
  setModerationStatus(opts: NgxYtdApiCommentsSetModerationStatusOpts): Observable<any> {
    return this._httpHandler<any, NgxYtdApiCommentsSetModerationStatusOpts, any>(
      `${this.ngxYtdCommentsApiUrl}/setModerationStatus`,
      opts,
      null,
      'post'
    );
  }
  /**
   * Modifies a comment
   *
   * See https://developers.google.com/youtube/v3/docs/comments/update for more info
   * @param body The API body
   * @param opts Options for the API
   * @return Results of the update as an `Observable`
   */
  update(body: NgxYtdApiCommentsResource, opts: NgxYtdApiCommentsUpdateOpts): Observable<NgxYtdApiCommentsResource> {
    return this._httpHandler<NgxYtdApiCommentsResource, NgxYtdApiCommentsUpdateOpts, NgxYtdApiCommentsResource>(
      this.ngxYtdCommentsApiUrl,
      opts,
      body,
      'put'
    );
  }
}

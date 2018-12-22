import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { Observable } from 'rxjs';
import {
  NgxYtdApiVideosDeleteOpts,
  NgxYtdApiVideosGetRatingOpts,
  NgxYtdApiVideosGetRatingResult,
  NgxYtdApiVideosInsertOpts,
  NgxYtdApiVideosListOpts,
  NgxYtdApiVideosListResult,
  NgxYtdApiVideosRateOpts,
  NgxYtdApiVideosReportAbuseBody,
  NgxYtdApiVideosReportAbuseOpts,
  NgxYtdApiVideosResource,
  NgxYtdApiVideosUpdateOpts
} from './ytd-api-videos.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiVideosService {
  constructor(
    private http: SimpleHttpService
  ) { }
  /**
   * The API URL for the Videos API of the YouTube Data v3 API
   */
  readonly ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
  /**
   * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
   */
  readonly ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
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
   * Deletes a YouTube video
   *
   * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  delete(opts: NgxYtdApiVideosDeleteOpts): Observable<any> {
    return this._httpHandler<any, NgxYtdApiVideosDeleteOpts, any>(
      this.ngxYtdVideosApiUrl,
      opts,
      null,
      'delete'
    );
  }
  /**
   * Retrieves the ratings that the authorized user gave to a list of specified videos
   *
   * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosGetRatingResult> {
    return this._httpHandler<any, NgxYtdApiVideosGetRatingOpts, NgxYtdApiVideosGetRatingResult>(
      `${this.ngxYtdVideosApiUrl}/getRating`,
      opts,
      null,
      'get'
    );
  }
  /**
   * Uploads a video to YouTube and optionally sets the video's metadata
   *
   * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  insert(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosInsertOpts): Observable<NgxYtdApiVideosResource> {
    return this._httpHandler<any, NgxYtdApiVideosInsertOpts, NgxYtdApiVideosResource>(
      this.ngxYtdVideoUploadsApiUrl,
      opts,
      body,
      'post'
    );
  }
  /**
   * Returns a list of videos that match the requested API parameters
   *
   * See https://developers.google.com/youtube/v3/docs/videos/list for more info
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult> {
    return this._httpHandler<any, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult>(
      this.ngxYtdVideosApiUrl,
      opts,
      null,
      'get'
    );
  }
  /**
   * Add a like or dislike rating to a video or remove a rating from a video
   *
   * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  rate(opts: NgxYtdApiVideosRateOpts): Observable<any> {
    return this._httpHandler<any, NgxYtdApiVideosRateOpts, any>(
      `${this.ngxYtdVideosApiUrl}/rate`,
      opts,
      null,
      'post'
    );
  }
  /**
   * Reports a video for having abusive content
   *
   * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  reportAbuse(body: NgxYtdApiVideosReportAbuseBody, opts?: NgxYtdApiVideosReportAbuseOpts): Observable<any> {
    return this._httpHandler<NgxYtdApiVideosReportAbuseBody, NgxYtdApiVideosReportAbuseOpts, any>(
      `${this.ngxYtdVideosApiUrl}/reportAbuse`,
      opts,
      body,
      'post'
    );
  }
  /**
   * Updates a video's metadata
   *
   * See https://developers.google.com/youtube/v3/docs/videos/update for more info
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  update(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosUpdateOpts): Observable<NgxYtdApiVideosResource> {
    return this._httpHandler<NgxYtdApiVideosResource, NgxYtdApiVideosUpdateOpts, NgxYtdApiVideosResource>(
      this.ngxYtdVideosApiUrl,
      opts,
      body,
      'put'
    );
  }
}

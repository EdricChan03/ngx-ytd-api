import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
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

@Injectable()
export class NgxYtdApiVideosService {
  constructor(
    private common: NgxYtdApiCommonService
  ) { }
  /**
   * The API URL for the Videos API of the YouTube Data v3 API
   */
  readonly ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
  /**
   * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
   */
  readonly ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
  /**
   * Deletes a YouTube video
   *
   * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  delete(opts: NgxYtdApiVideosDeleteOpts): Observable<any> {
    return this.common.sendHttpRequest<any, NgxYtdApiVideosDeleteOpts, any>(
      this.ngxYtdVideosApiUrl,
      this.common.mergeOpts<NgxYtdApiVideosDeleteOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiVideosGetRatingOpts, NgxYtdApiVideosGetRatingResult>(
      `${this.ngxYtdVideosApiUrl}/getRating`,
      this.common.mergeOpts<NgxYtdApiVideosGetRatingOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiVideosInsertOpts, NgxYtdApiVideosResource>(
      this.ngxYtdVideoUploadsApiUrl,
      this.common.mergeOpts<NgxYtdApiVideosInsertOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult>(
      this.ngxYtdVideosApiUrl,
      this.common.mergeOpts<NgxYtdApiVideosListOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiVideosRateOpts, any>(
      `${this.ngxYtdVideosApiUrl}/rate`,
      this.common.mergeOpts<NgxYtdApiVideosRateOpts>(opts),
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
    return this.common.sendHttpRequest<NgxYtdApiVideosReportAbuseBody, NgxYtdApiVideosReportAbuseOpts, any>(
      `${this.ngxYtdVideosApiUrl}/reportAbuse`,
      this.common.mergeOpts<NgxYtdApiVideosReportAbuseOpts>(opts),
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
    return this.common.sendHttpRequest<NgxYtdApiVideosResource, NgxYtdApiVideosUpdateOpts, NgxYtdApiVideosResource>(
      this.ngxYtdVideosApiUrl,
      this.common.mergeOpts<NgxYtdApiVideosUpdateOpts>(opts),
      body,
      'put'
    );
  }
}

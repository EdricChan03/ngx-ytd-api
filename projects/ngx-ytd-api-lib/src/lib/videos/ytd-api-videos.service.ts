import { Injectable } from '@angular/core';
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
import { Observable } from 'rxjs';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiVideosService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Deletes a YouTube video
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  delete(opts: NgxYtdApiVideosDeleteOpts): Observable<any> {
    return this.core.createHttpDelete<NgxYtdApiVideosDeleteOpts>(this.core.ngxYtdVideosApiUrl, opts);
  }
  /**
   * Retrieves the ratings that the authorized user gave to a list of specified videos
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosGetRatingResult> {
    return this.core.createHttpGet<NgxYtdApiVideosGetRatingResult, NgxYtdApiVideosGetRatingOpts>(
      `${this.core.ngxYtdVideosApiUrl}/getRating`,
      opts
    );
  }
  /**
   * Uploads a video to YouTube and optionally sets the video's metadata
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  insert(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosInsertOpts): Observable<NgxYtdApiVideosResource> {
    return this.core.createHttpPost<NgxYtdApiVideosInsertOpts, NgxYtdApiVideosResource>(
      this.core.ngxYtdVideoUploadsApiUrl,
      opts,
      body
    );
  }
  /**
   * Returns a list of videos that match the requested API parameters
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult> {
    return this.core.createHttpGet<NgxYtdApiVideosListResult, NgxYtdApiVideosListOpts>(`${this.core.ngxYtdVideosApiUrl}`, opts);
  }
  /**
   * Add a like or dislike rating to a video or remove a rating from a video
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  rate(opts: NgxYtdApiVideosRateOpts): Observable<any> {
    return this.core.createHttpPost<NgxYtdApiVideosRateOpts, any>(
      `${this.core.ngxYtdVideosApiUrl}/rate`,
      opts
    );
  }
  /**
   * Reports a video for having abusive content
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  reportAbuse(body: NgxYtdApiVideosReportAbuseBody, opts?: NgxYtdApiVideosReportAbuseOpts): Observable<any> {
    return this.core.createHttpPost<NgxYtdApiVideosReportAbuseOpts, NgxYtdApiVideosReportAbuseBody>(
      `${this.core.ngxYtdVideosApiUrl}/reportAbuse`,
      opts,
      body
    );
  }
  /**
   * Updates a video's metadata
   * @param body The HTTP request body
   * @param opts API parameters for the API
   * @return An observable of the HTTP request
   */
  update(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosUpdateOpts): Observable<NgxYtdApiVideosResource> {
    return this.core.createHttpPut<NgxYtdApiVideosResource, NgxYtdApiVideosUpdateOpts, NgxYtdApiVideosResource>(
      this.core.ngxYtdVideosApiUrl,
      opts,
      body
    );
  }
}

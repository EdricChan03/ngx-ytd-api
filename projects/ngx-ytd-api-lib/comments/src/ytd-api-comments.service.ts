
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
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

@Injectable()
export class NgxYtdApiCommentsService {
  constructor(
    private common: NgxYtdApiCommonService
  ) { }
  /**
   * The API URL for the Comments API of the YouTube Data v3 API
   */
  readonly ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
  /**
   * Deletes a comment
   *
   * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
   * @param opts Options for the API
   * @return Results of the deletion as an `Observable`
   */
  delete(opts: NgxYtdApiCommentsDeleteOpts): Observable<any> {
    return this.common.sendHttpRequest<any, NgxYtdApiCommentsDeleteOpts, any>(
      this.ngxYtdCommentsApiUrl,
      this.common.mergeOpts<NgxYtdApiCommentsDeleteOpts>(opts),
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
    return this.common.sendHttpRequest<NgxYtdApiCommentsResource, NgxYtdApiCommentsInsertOpts, any>(
      this.ngxYtdCommentsApiUrl,
      this.common.mergeOpts<NgxYtdApiCommentsInsertOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiCommentsListOpts, NgxYtdApiCommentsListResult>(
      this.ngxYtdCommentsApiUrl,
      this.common.mergeOpts<NgxYtdApiCommentsListOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiCommentsMarkAsSpamOpts, any>(
      `${this.ngxYtdCommentsApiUrl}/markAsSpam`,
      this.common.mergeOpts<NgxYtdApiCommentsMarkAsSpamOpts>(opts),
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
    return this.common.sendHttpRequest<any, NgxYtdApiCommentsSetModerationStatusOpts, any>(
      `${this.ngxYtdCommentsApiUrl}/setModerationStatus`,
      this.common.mergeOpts<NgxYtdApiCommentsSetModerationStatusOpts>(opts),
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
    return this.common.sendHttpRequest<NgxYtdApiCommentsResource, NgxYtdApiCommentsUpdateOpts, NgxYtdApiCommentsResource>(
      this.ngxYtdCommentsApiUrl,
      this.common.mergeOpts<NgxYtdApiCommentsUpdateOpts>(opts),
      body,
      'put'
    );
  }
}

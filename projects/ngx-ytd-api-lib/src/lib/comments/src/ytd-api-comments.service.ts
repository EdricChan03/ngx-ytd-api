import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
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
import { NgxYtdApiCommentsModule } from './ytd-api-comments.module';

@Injectable({
  providedIn: NgxYtdApiCommentsModule
})
export class NgxYtdApiCommentsService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Deletes a comment
   *
   * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
   * @param opts Options for the API
   * @return Results of the deletion as an `Observable`
   */
  delete(opts: NgxYtdApiCommentsDeleteOpts): Observable<any> {
    return this.core.createHttpDelete<NgxYtdApiCommentsDeleteOpts>(this.core.ngxYtdCommentsApiUrl, opts);
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
    return this.core.createHttpPost<NgxYtdApiCommentsInsertOpts, NgxYtdApiCommentsResource>(
      this.core.ngxYtdCommentsApiUrl,
      opts,
      body
    );
  }
  /**
   * Retrieves comments
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list for more info
   * @param opts Options for the API
   * @return Results of the search as an `Observable`
   */
  list(opts: NgxYtdApiCommentsListOpts): Observable<NgxYtdApiCommentsListResult> {
    return this.core.createHttpGet<NgxYtdApiCommentsListResult, NgxYtdApiCommentsListOpts>(this.core.ngxYtdCommentsApiUrl, opts);
  }
  /**
   * Flags one or more comments as spam
   *
   * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
   * @param opts Options for the API
   * @return Results of the search as an `Observable`
   */
  markAsSpam(opts: NgxYtdApiCommentsMarkAsSpamOpts): Observable<any> {
    return this.core.createHttpPost<NgxYtdApiCommentsMarkAsSpamOpts, null>(
      `${this.core.ngxYtdCommentsApiUrl}/markAsSpam`,
      opts
    );
  }
  /**
   * Sets the moderation status of one or more comments
   *
   * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
   * @param opts Options for the API
   * @return Results of the search as an `Observable`
   */
  setModerationStatus(opts: NgxYtdApiCommentsSetModerationStatusOpts): Observable<any> {
    return this.core.createHttpPost<NgxYtdApiCommentsSetModerationStatusOpts, null>(
      `${this.core.ngxYtdCommentsApiUrl}/setModerationStatus`,
      opts
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
    return this.core.createHttpPut<NgxYtdApiCommentsResource, NgxYtdApiCommentsUpdateOpts, NgxYtdApiCommentsResource>(
      this.core.ngxYtdCommentsApiUrl,
      opts,
      body
    );
  }
}

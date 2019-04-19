import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
import { Observable } from 'rxjs';
import {
  NgxYtdApiCommentThreadsInsertParams,
  NgxYtdApiCommentThreadsListParams,
  NgxYtdApiCommentThreadsListResponse,
  NgxYtdApiCommentThreadsResource,
  NgxYtdApiCommentThreadsUpdateParams
} from './ytd-api-comment-threads.interface';

@Injectable()
export class NgxYtdApiCommentThreadsService {
  constructor(private common: NgxYtdApiCommonService) { }

  readonly ngxYtdApiCommentThreadsApiUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
  /**
   * Returns a list of comment threads that match the API request parameters
   * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list)
   * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters)
   * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response)
   * @see [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
   * @param params Query parameters to be appended to the API endpoint
   * @returns Results of the list as an `Observable`
   */
  list(params: NgxYtdApiCommentThreadsListParams): Observable<NgxYtdApiCommentThreadsListResponse> {
    return this.common.sendHttpRequest<null, NgxYtdApiCommentThreadsListParams, NgxYtdApiCommentThreadsListResponse>(
      this.ngxYtdApiCommentThreadsApiUrl,
      this.common.mergeParamsWithStandardParams<NgxYtdApiCommentThreadsListParams>(params),
      null,
      'get'
    );
  }

  /**
   * Creates a new top-level comment
   * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert)
   * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
   * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response)
   * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body)
   * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
   * @param body The top-level comment to create
   * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
   * @param params Parameters for the API
   * @returns The created comment thread
   */
  insert(body: NgxYtdApiCommentThreadsResource, params: NgxYtdApiCommentThreadsInsertParams): Observable<NgxYtdApiCommentThreadsResource> {
    return this.common.sendHttpRequest<
    NgxYtdApiCommentThreadsResource,
    NgxYtdApiCommentThreadsInsertParams,
    NgxYtdApiCommentThreadsResource>(
      this.ngxYtdApiCommentThreadsApiUrl,
      this.common.mergeParamsWithStandardParams<NgxYtdApiCommentThreadsInsertParams>(params),
      body,
      'post'
      );
    }
    
    /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response)
     * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body)
     * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param body A modified version of the top-level comment
     * @param params Parameters for the API
     * @returns The updated top-level comment
     */
  update(body: NgxYtdApiCommentThreadsResource, params: NgxYtdApiCommentThreadsUpdateParams): Observable<NgxYtdApiCommentThreadsResource> {
    return this.common.sendHttpRequest<
      NgxYtdApiCommentThreadsResource,
      NgxYtdApiCommentThreadsUpdateParams,
      NgxYtdApiCommentThreadsResource
    >(
      this.ngxYtdApiCommentThreadsApiUrl,
      this.common.mergeParamsWithStandardParams(params),
      body,
      'put'
    );
  }
}

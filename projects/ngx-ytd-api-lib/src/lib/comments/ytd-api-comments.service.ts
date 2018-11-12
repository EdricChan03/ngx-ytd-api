import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiCommentsService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Retrieves comments
   * @param opts Options for the API
   * @return Results of the search as a stream for subscribing to
   */
  list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult> {
    return this.core.createHttpGet<NgxYtdApiCommentListResult, NgxYtdApiCommentListOpts>(this.core.ngxYtdCommentsApiUrl, opts);
  }
}

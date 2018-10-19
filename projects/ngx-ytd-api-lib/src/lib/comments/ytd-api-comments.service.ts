import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiCommentService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Retrieves comments
   * @param opts Options for the API
   * @returns Results of the search as a stream for subscribing to
   */
  list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult> {
    return this.core._generateApiRequest<NgxYtdApiCommentListResult>(this.core.ngxYtdCommentsApiUrl, opts);
  }
}

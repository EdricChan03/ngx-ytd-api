import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';

@Injectable()
export class NgxYtdApiSearchService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Searches using the YouTube HTTP Data API
   * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
   * for more info.
   * @param opts Options for searching
   * @return Results of the search as a stream
   */
  list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult> {
    return this.core._generateApiRequest<NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts>(this.core.ngxYtdSearchApiUrl, opts);
  }
}

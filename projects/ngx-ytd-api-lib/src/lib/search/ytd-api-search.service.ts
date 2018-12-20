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
   * Returns a collection of search results that match the query parameters specified
   *
   * See https://developers.google.com/youtube/v3/docs/search/list for more info
   * @param opts API parameters for the API
   * @return Results of the search has an `Observable`
   */
  list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult> {
    return this.core.createHttpGet<NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts>(this.core.ngxYtdSearchApiUrl, opts);
  }
}

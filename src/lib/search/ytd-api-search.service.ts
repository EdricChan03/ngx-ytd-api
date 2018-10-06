import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiSearchService {
  /**
   * The YouTube base API URL
   */
  constructor(private http: HttpClient) { }
  /**
   * The API URL of the YouTube Data v3 Search API
   */
  readonly ytdSearchBaseApiUrl: string = 'https://www.googleapis.com/youtube/v3/search';
  /**
   * Searches using the YouTube HTTP Data API
   * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
   * for more info.
   * @param opts Options for searching
   * @returns Results of the search as a stream
   */
  list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult> {
    const query = encodeURI(opts.q);
    let _hasPartOpt = false;
    let _apiUrl = `${this.ytdSearchBaseApiUrl}?q=${query}`;
    let _httpHeaders;
    // Loop through every property in the opts object
    for (const prop in opts) {
      // Check if property has a non-null value
      // Also checks if the property is not `q` to prevent duplication
      if (opts.hasOwnProperty(prop) && opts[prop] !== null && prop !== 'q') {
        // Add parameter to the API URL
        _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
        if (prop === 'part') {
          _hasPartOpt = true;
        }
        // Special case as the API doesn't accept camcel case for the
        // access token parameter.
        if (prop === 'accessToken') {
          _httpHeaders = new HttpHeaders({'Authorization': `Bearer ${opts[prop]}`});
        }
      }
    }
    // Default if `part` parameter isn't specified
    if (!_hasPartOpt) {
      _apiUrl += '&part=snippet';
    }
    if (_httpHeaders) {
      return this.http.get<NgxYtdApiSearchListResult>(_apiUrl, {headers: _httpHeaders});
    }
    return this.http.get<NgxYtdApiSearchListResult>(_apiUrl);
  }
}

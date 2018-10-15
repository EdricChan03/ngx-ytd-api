import { Injectable } from '@angular/core';
import { NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult } from './ytd-api-videos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiVideoService {
  readonly ytdApiVideoBaseApiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private http: HttpClient) { }
  /**
   * Returns a list of videos that match the requested API parameters
   * @param opts API parameters for the API
   */
  list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult> {
    let _hasPartOpt = false;
    let _apiUrl = `${this.ytdApiVideoBaseApiUrl}`;
    let _httpHeaders;
    // Loop through every property in the opts object
    for (const prop in opts) {
      // Check if property has a non-null value
      if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
        // Add parameter to the API URL
        _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
        if (prop === 'part') {
          _hasPartOpt = true;
        } else if (prop === 'accessToken') {
          _httpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${opts[prop]}` });
        }
      }
    }
    // Default if `part` parameter isn't specified
    if (!_hasPartOpt) {
      _apiUrl += '&part=snippet,id';
    }
    if (_httpHeaders) {
      return this.http.get<NgxYtdApiVideosListResult>(_apiUrl, { headers: _httpHeaders });
    }
    return this.http.get<NgxYtdApiVideosListResult>(_apiUrl);
  }
}

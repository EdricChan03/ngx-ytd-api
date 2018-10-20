import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiCoreService {
  constructor(private http: HttpClient) { }
  /**
   * The API URL for the Comments API of the YouTube Data v3 API
   */
  readonly ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
  /**
   * The API URL for the Search API of the YouTube Data v3 API
   */
  readonly ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
  /**
   * The API URL for the Videos API of the YouTube Data v3 API
   */
  readonly ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
  /**
   * Generates the query parameters to be used with the API endpoint
   * @return A `HttpClient` instance
   */
  _generateApiRequest<R, P extends any>(apiEndpoint: string, apiParams: P): Observable<R> {
    let params = new HttpParams();
    let headers;
    for (const prop in apiParams) {
      if (prop in apiParams && typeof apiParams[prop] !== undefined) {
        if (prop === 'accessToken') {
          headers = new HttpHeaders()
            .set('Authorization', `Bearer ${apiParams[prop]}`);
        } else {
          params = params.append(prop, apiParams[prop]);
        }
      }
    }
    if (headers) {
      return this.http.get<R>(
        apiEndpoint,
        {
          params: params,
          headers: headers
        }
      );
    } else {
      return this.http.get<R>(
        apiEndpoint,
        {
          params: params,
          headers: headers
        }
      );
    }
  }
}

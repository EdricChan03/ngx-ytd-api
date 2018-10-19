import { Injectable } from '@angular/core';
import {
  NgxYtdApiVideosGetRatingOpts,
  NgxYtdApiVideosGetRatingResult,
  NgxYtdApiVideosListOpts,
  NgxYtdApiVideosListResult
} from './ytd-api-videos.interface';
import { Observable } from 'rxjs';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';

@Injectable({
  providedIn: 'root'
})
export class NgxYtdApiVideosService {
  constructor(
    private core: NgxYtdApiCoreService
  ) { }
  /**
   * Retrieves the ratings that the authorized user gave to a list of specified videos
   * @param opts API parameters for the API
   */
  getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosGetRatingResult> {
    return this.core._generateApiRequest<NgxYtdApiVideosGetRatingResult>(`${this.core.ngxYtdVideosApiUrl}/getRating`, opts);
  }
  /**
   * Returns a list of videos that match the requested API parameters
   * @param opts API parameters for the API
   */
  list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult> {
    return this.core._generateApiRequest<NgxYtdApiVideosListResult>(`${this.core.ngxYtdVideosApiUrl}`, opts);
  }
}

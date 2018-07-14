import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';

@Injectable({
	providedIn: 'root'
})
export class NgxYtdApiCommentService {
	/**
 	 * The YouTube base API URL
 	 */
	readonly ytdCommentBaseApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
	constructor(private http: HttpClient) { }
	/**
	 * Retrieves comments
	 * @param opts Options for the API
	 * @returns Results of the search as a stream for subscribing to
	 */
	list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult> {
		let _hasPartOpt = false;
		let _apiUrl = this.ytdCommentBaseApiUrl;
		// Loop through every property in the opts object
		for (const prop in opts) {
			// Check if property has a non-null value
			if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
				// Add parameter to the API URL
				_apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
				if (prop === 'part') {
					_hasPartOpt = true;
				}
			}
		}
		// Default if `part` parameter isn't specified
		if (!_hasPartOpt) {
			_apiUrl += '&part=snippet,id';
		}
		return this.http.get<NgxYtdApiCommentListResult>(_apiUrl);
	}
}

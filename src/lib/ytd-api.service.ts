import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { NgxYtdApiSearchResult, NgxYtdApiSearchOpts } from './search/ytd-api-search.interfaces';

@Injectable({
	providedIn: 'root'
})
export class NgxYtdApiService {
	/**
	 * The YouTube base API URL
	 */
	private ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
	constructor(
		private http: HttpClient
	) { }
	/**
	 * Searches using the YouTube HTTP Data API
	 * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
	 * for more info.
	 * @param opts Options for searching
	 * @returns Results of the search as a stream
	 */
	search(query: string, opts: NgxYtdApiSearchOpts): Observable<NgxYtdApiSearchResult> {
		query = encodeURI(query);
		let _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&part=snippet,id`;
		// Loop through every property in the opts object
		for (const prop in opts) {
			// Check if property has a non-null value
			if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
				// Add parameter to the API URL
				_apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
			}
		}
		return this.http.get<NgxYtdApiSearchResult>(_apiUrl);
	}
}

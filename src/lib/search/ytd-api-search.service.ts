import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NgxYtdApiVideoSearchOpts, NgxYtdApiSearchOpts, NgxYtdApiSearchResult } from './ytd-api-search.interfaces';

@Injectable({
	providedIn: 'root'
})
export class NgxYtdApiSearchService {
	/**
	 * The YouTube base API URL
	 */
	private ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
	constructor(private http: HttpClient) { }

	/**
	 * Searches for videos using the YouTube HTTP Data API
	 * @param query The query to search for
	 * @param opts Options for YouTube Data API for Videos
	 * @returns Results of the search as a stream
	*/
	searchVideos(query: string, opts: NgxYtdApiVideoSearchOpts): Observable<NgxYtdApiSearchResult> {
		// Encode the query
		query = encodeURI(query);
		let _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
		if (opts.maxResults) {
			_apiUrl += `&maxResults=${opts.maxResults}`;
		} else {
			_apiUrl += '&maxResults=50';
		}
		if (opts.videoEmbeddable) {
			_apiUrl += `&videoEmbeddable=${opts.videoEmbeddable}`;
		}
		return this.http.get<NgxYtdApiSearchResult>(_apiUrl);
	}
	/**
	 * Searches using the YouTube HTTP Data API
	 * @param query The query to search for
	 * @param opts Options for searching
	 * @returns Results of the search as a stream
	 */
	search(query: string, opts: NgxYtdApiSearchOpts): Observable<NgxYtdApiSearchResult> {
		query = encodeURI(query);
		let _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
		if (opts.maxResults) {
			_apiUrl += `&maxResults=${opts.maxResults}`;
		} else {
			_apiUrl += '&maxResults=50';
		}
		if (opts.channelId) {
			_apiUrl += `&channelId=${opts.channelId}`;
		}
		return this.http.get<NgxYtdApiSearchResult>(_apiUrl);
	}
}
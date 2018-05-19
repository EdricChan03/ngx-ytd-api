import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as ytdApiInterfaces from './ytd-api.interfaces';

@Injectable({
	providedIn: 'root'
})
export class NgxYtdApiService {
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
	searchVideos(query: string, opts: ytdApiInterfaces.NgxYtdApiVideoSearchOpts): Observable<ytdApiInterfaces.NgxYtdApiSearchResult> {
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
		return this.http.get<ytdApiInterfaces.NgxYtdApiSearchResult>(_apiUrl);
	}
	/**
	 * Searches using the YouTube HTTP Data API
	 * @param query The query to search for
	 * @param opts
	 * @returns Results of the search as a stream
	 */
	search(query: string, opts: ytdApiInterfaces.NgxYtdApiSearchOpts): Observable<ytdApiInterfaces.NgxYtdApiSearchResult> {
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
		return this.http.get<ytdApiInterfaces.NgxYtdApiSearchResult>(_apiUrl);
	}
}
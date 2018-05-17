/**
 * Generic options
 */
export interface NgxYtdApiGenericOpts {
	/**
	 * The API key.
	 * @todo Add support for adding an API key via `forRoot` or `providers`
	 */
	apiKey: string;
}
export interface NgxYtdApiSearchOpts extends NgxYtdApiGenericOpts {
	/**
	 * The channel ID to search videos from
	 */
	channelId?: string;
	/**
	 * Maximum results for video searching
	 */
	maxResults?: number;
}
export interface NgxYtdApiVideoSearchOpts extends NgxYtdApiSearchOpts {
	/**
	 * Whether to make the video results be embeddable
	 */
	videoEmbeddable?: boolean;
	/**
	 * The channel ID to search videos from
	 */
	channelId?: string;
}

export interface NgxYtdApiGenericResult {
	/**
	 * The API's resource type
	 */
	kind: string;
	/**
	 * The ETag of the request
	 */
	etag: string;
}
// Result interfaces
export interface NgxYtdApiSearchResult extends NgxYtdApiGenericResult {
	/**
	 * The id object contains info which can be used for uniquely identifing the resource
	 * See the [documentation]{@link https://developers.google.com/youtube/v3/docs/search#id} for more info
	 */
	id: {
		/**
		 * The type of the resource
		 */
		kind: string;
		videoId?: string;
		channelId?: string;
		playlistId?: string;
	};
	/**
	 * The `snippet` object contains info on the search result
	 */
	snippet: {
		/**
		 * The creation date and time of the resource. The value is specified in ISO 8601 `(YYYY-MM-DDThh:mm:ss.sZ)` format.
		 */
		publishedAt: string | any;
		/**
		 * The channel's ID
		 */
		channelId: string;
		/**
		 * The title of the search result
		 */
		title: string;
		/**
		 * A description of the search result
		 */
		description: string;
		/**
		 * An object of the thumbnails
		 */
		thumbnails: any;
		/**
		 * The title of the channel that published the resource
		 */
		channelTitle: string;
		/**
		 * See https://developers.google.com/youtube/v3/docs/search#snippet.liveBroadcastContent for more info
		 */
		liveBroadcastContent?: 'upcoming' | 'live' | 'none';
	};
}

/**
 * @deprecated Use `NgxYtdApiSearchResult[]` instead
 */
export declare type NgxYtdApiSearchResults = NgxYtdApiSearchResult[];

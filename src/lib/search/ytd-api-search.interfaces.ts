import { NgxYtdApiGenericOpts, NgxYtdApiGenericResult } from '../ytd-api.interfaces';

export interface NgxYtdApiSearchOpts extends NgxYtdApiGenericOpts {
	/**
	 * The channel ID to search videos from
	 */
	channelId?: string;
	/**
	 * Restricts a search to a particular type of channel.
	 * Acceptable values:
	 * - `any` - Return all channels
	 * - `show` - Only return shows
	 */
	channelType?: 'any' | 'show';
	/**
	 * Restricts a search to broadcast events
	 * Note: If a value is specified for this parameter, the parameter `type`'s value must be set to `video`
	 */
	eventType?: 'completed' | 'live' | 'upcoming';
	/**
	 * See https://developers.google.com/youtube/v3/docs/search/list#location for more info
	 */
	location?: string;
	/**
	 * See https://developers.google.com/youtube/v3/docs/search/list#locationRadius for more info
	 */
	locationRadius?: string;
	/**
	 * Maximum results for video searching
	 * Allowed values: 0 - 50
	 */
	maxResults?: number;
	/**
	 * Used for specifying the order of resources in the response.
	 * Default value: `relevance`
	 */
	order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';
	/**
	 * The page token to get a response from
	 */
	pageToken?: string;
	/**
	 * See https://developers.google.com/youtube/v3/docs/search/list#publishedAfter for more info
	 * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
	 */
	publishedAfter?: string;
	/**
	 * See https://developers.google.com/youtube/v3/docs/search/list#publishedBefore for more info
	 * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
	 */
	publishedBefore?: string;
	/**
	 * The parameter tells the API to return search results for videos that can be viewed in the specific country.
	 * Allowed values:
	 * an {@link http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm|ISO 3166-1 alpha-2} country code.
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
	 */
	regionCode?: string;
	/**
	 * This parameter tells the API to return search results that are most relevant to the specified language.
	 * Allowed values:
	 * an {@link http://www.loc.gov/standards/iso639-2/php/code_list.php|ISO 639-1 two-letter language code}
	 * However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
	 * Note: Results in other languages will still be returned if they are highly relevant to the search query term.
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
	 */
	relevanceLanguage?: string;
	/**
	 * Indicates whether the search results should include restriected content as well as standard content.
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#safeSearch|developer docs} for more info
	 */
	safeSearch?: 'moderate' | 'none' | 'strict';
	/**
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#topicId|developer docs} for more info
	 */
	topicId?: string;
	/**
	 * Restricts a search query to only return certain resources
	 * Note: The value is of a comma-seperated list of resource types.
	 * Default: `video,channel,playlist`
	 */
	type?: string;
	/**
	 * Whether the API should filter video search results based on whether they have captions.
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoCaption|developer docs} for more info
	 */
	videoCaption?: 'any' | 'closedcaption' | 'none';
	/**
	 * Filters video search results based on their category.
	 * Note: the `type` parameter's value must be set to `video`
	 */
	videoCategoryId?: string;
	/**
	 * Restricts a search to only include either high definition/standard definition videos.
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoDefinition|developer docs} for more info
	 */
	videoDefinition?: 'any' | 'high' | 'standard';
	/**
	 * Filters video search results based on their duration.
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoDuration|developer docs} for more info
	 */
	videoDuration?: 'any' | 'long' | 'medium' | 'short';
	/**
	 * Restricts a search to only videos that can be embedded on a webpage.
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable|developer docs} for more info
	 */
	videoEmbeddable?: 'any' | 'true';
	/**
	 * Filters videos to only include videos with a particular license.
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoLicense|developer docs} for more info
	 */
	videoLicense?: 'any' | 'creativeCommon' | 'youtube';
	/**
	 * Whether to restrict a search to only videos that can be played outside of youtube.com
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated|developer docs} for more info
	 */
	videoSyndicated?: 'any' | 'true';
	/**
	 * Restrict a search to a particulat type of videos
	 * Note: the `type` parameter's value must be set to `video`
	 * See the {@link https://developers.google.com/youtube/v3/docs/search/list#videoType|developer docs} for more info
	 */
	videoType?: 'any' | 'episode' | 'movie';

}

export interface NgxYtdApiSearchResultItem extends NgxYtdApiGenericResult {
	/**
	 * The id object contains info which can be used for uniquely identifing the resource
	 * See the [documentation]{@link https://developers.google.com/youtube/v3/docs/search#id} for more info
	 */
	id?: {
		/**
		 * The type of the resource
		 */
		kind?: string;
		videoId?: string;
		channelId?: string;
		playlistId?: string;
	};
	/**
	 * The `snippet` object contains info on the search result
	 */
	snippet?: {
		/**
		 * The creation date and time of the resource. The value is specified in ISO 8601 `(YYYY-MM-DDThh:mm:ss.sZ)` format.
		 */
		publishedAt?: string | any;
		/**
		 * The channel's ID
		 */
		channelId?: string;
		/**
		 * The title of the search result
		 */
		title?: string;
		/**
		 * A description of the search result
		 */
		description?: string;
		/**
		 * An object of the thumbnails
		 */
		thumbnails?: any;
		/**
		 * The title of the channel that published the resource
		 */
		channelTitle?: string;
		/**
		 * See https://developers.google.com/youtube/v3/docs/search#snippet.liveBroadcastContent for more info
		 */
		liveBroadcastContent?: 'upcoming' | 'live' | 'none';
	};
}

// Result interfaces
export interface NgxYtdApiSearchResult extends NgxYtdApiGenericResult {
	/**
	 * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
	 */
	nextPageToken?: string;
	/**
	 * The token that can be used as the value of the `pageToken` parameter to retrieve the previous page in the result set.
	 */
	prevPageToken?: string;
	/**
	 * The region code used for the search query.
	 */
	regionCode?: string;
	/**
	 * Paging info about the result
	 */
	pagingInfo?: {
		/**
		 * Total results. Note that the max value is `1000000` and is approximate.
		 */
		totalResults?: number;
		/**
		 * Number of results included in response
		 */
		resultsPerPage?: number;
	};
	/**
	 * An array of results that match the criteria
	 */
	items?: NgxYtdApiSearchResultItem[];
}

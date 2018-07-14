/**
 * Generic options
 */
export interface NgxYtdApiGenericOpts {
	/**
	 * The API key for accessing the API
	 */
	key: string;
	/**
	 * Parts of the result to show
	 * Defaults to `snippet,id`
	 */
	part?: string;
}


export interface NgxYtdApiGenericResult {
	/**
	 * The API's resource type
	 */
	kind?: string;
	/**
	 * The ETag of the request
	 */
	etag?: string;
}

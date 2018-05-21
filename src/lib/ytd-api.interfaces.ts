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

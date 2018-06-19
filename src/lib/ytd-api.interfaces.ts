/**
 * Generic options
 */
export interface NgxYtdApiGenericOpts {
	key: string;
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

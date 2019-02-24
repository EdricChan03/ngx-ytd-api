/**
 * Standard parameters
 */
export interface NgxYtdApiStandardParams {
  /**
   * Whether to pass the access token with a query parameter instead of the `Authorization` HTTP header
   * - Default value: `false`
   * - Note: This value is an unofficial standard query parameter and is
   * only used for conditionally setting the `access_token` query parameter for an API endpoint.
   */
  accessTokenUsesParam?: boolean;
  /**
   * The access token from Google's OAuth 2.0 API
   *
   * This is to be passed to the `Authorization` HTTP header
   */
  accessToken?: string;
  /**
   * The callback function.
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#callback)
   */
  callback?: string;
  /**
   * Specifies which fields to return
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#fields)
   */
  fields?: string;
  /**
   * The API key for accessing the API
   * - Note: This is **required** unless you're using an OAuth 2.0 token
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#key)
   */
  key?: string;
  /**
   * Whether to return the response with line breaks & indentations
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#prettyPrint)
   */
  prettyPrint?: boolean;
  /**
   * Gives the ability to enforce per-user quotas from a server-side application even
   * in cases when the user's IP address is unknown.
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#quotaUser)
   */
  quotaUser?: string;
  /**
   * Gives the ability to enforce per-user quotas when calling the API from a server-side
   * application.
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#userIp)
   */
  userIp?: string;
}
/**
 * @deprecated Use {@link NgxYtdApiStandardParams}
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiStandardOpts extends NgxYtdApiStandardParams { }
/**
 * Standard query parameters with the `part` parameter that most YouTube Data v3 API endpoints use
 */
export interface NgxYtdApiStandardWithPartParams extends NgxYtdApiStandardParams {
  /**
   * Parts of the result to show
   * Defaults to `snippet,id`
   */
  part?: string;
}
/**
 * @deprecated Use {@link NgxYtdApiStandardWithPartParams}
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiGenericOpts extends NgxYtdApiStandardWithPartParams {}

/**
 * A generic resource interface that `ngx-ytd-api`'s interfaces extend from
 */
export interface NgxYtdApiGenericResource {
  /**
   * The ETag of the request
   */
  etag?: string;
  /**
   * The API's resource type
   */
  kind?: string;
}

/**
 * A generic response interface that `ngx-ytd-api`'s interfaces extend from as the return type
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiGenericResponse extends NgxYtdApiGenericResource {
}

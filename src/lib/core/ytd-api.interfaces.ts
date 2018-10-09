/**
 * Generic options
 */
export interface NgxYtdApiGenericOpts {
  /**
   * The access token from Google's OAuth 2.0 API
   * This is to be passed to the `Authorization` HTTP header
   */
  accessToken?: string;
  /**
   * The callback function.
   */
  callback?: string;
  /**
   * Specifies which fields to return
   * See https://developers.google.com/youtube/v3/getting-started#partial for more info
   */
  fields?: string;
  /**
   * The API key for accessing the API
   */
  key?: string;
  /**
   * Parts of the result to show
   * Defaults to `snippet,id`
   */
  part?: string;
  /**
   * Whether to return the response with line breaks & indentations
   */
  prettyPrint?: boolean;
  /**
   * Gives the ability to enforce per-user quotas from a server-side application even
   * in cases when the user's IP address is unknown.
   * See https://developers.google.com/youtube/v3/docs/standard_parameters#quotaUser for more info
   */
  quotaUser?: string;
  /**
   * Gives the ability to enforce per-user quotas when calling the API from a server-side
   * application.
   * See https://developers.google.com/youtube/v3/docs/standard_parameters#userIp for more info
   */
  userIp?: string;
}

export interface NgxYtdApiGenericResult {
  /**
   * The ETag of the request
   */
  etag?: string;
  /**
   * The API's resource type
   */
  kind?: string;
}

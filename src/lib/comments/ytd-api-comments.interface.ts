import { NgxYtdApiGenericOpts, NgxYtdApiGenericResult } from 'ngx-ytd-api/core';

export interface NgxYtdApiCommentListOpts extends NgxYtdApiGenericOpts {
  /**
   * Specifies a comma-separated list of comment IDs for the resources that are being retrieved.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/comments/list#id|developer docs} for more info
   * Note: This parameter is a filter, where only one filter should be specified
   */
  id?: string;
  /**
   * Specifies the ID of the comment for which replies should be retrieved.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/comments/list#parentId|developer docs} for more info
   * Note: This parameter is a filter, where only one filter should be specified
   */
  parentId?: string;
  /**
   * Specifies the maximum number of items that should be returned in the results.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/comments/list#maxResults|developer docs} for more info
   * Note: This parameter is not supported for use in conjunction with the id parameter.
   * Acceptable values are 1 to 100, inclusive. The default value is 20.
   */
  maxResults?: number;
  /**
   * Identifies a specific page in the result set that should be returned.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/comments/list#pageToken|developer docs} for more info
   * Note: This parameter is not supported for use in conjunction with the id parameter.
   */
  pageToken?: string;
  /**
   * Indicates whether the API should return comments formatted as HTML or as plain text.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/comments/list#textFormat|developer docs} for more info
   * Acceptable values are:
   * - html – Returns the comments in HTML format. This is the default value.
   * - plainText – Returns the comments in plain text format.
   */
  textFormat?: 'html' | 'plainText';
}

export interface NgxYtdApiCommentListResultItem {
  /**
   * Identifies the API resource's type.
   */
  kind?: string;
  /**
   * The Etag of this resource.
   */
  etag?: string;
  /**
   * The ID that YouTube uses to uniquely identify the comment.
   */
  id?: string;
  /**
   * The snippet object contains basic details about the comment.
   */
  snippet?: {
    /**
     * The display name of the user who posted the comment.
     */
    authorDisplayName?: string;
    /**
     * The URL for the avatar of the user who posted the comment.
     */
    authorProfileImageUrl?: string;
    /**
     * The URL of the comment author's YouTube channel, if available.
     */
    authorChannelUrl?: string;
    /**
     * This object encapsulates information about the comment author's YouTube channel, if available.
     */
    authorChannelId?: {
      /**
       * The ID of the comment author's YouTube channel, if available.
       */
      value?: string;
    }
    /**
     * The ID of the YouTube channel associated with the comment.
     * - If the comment is a video comment, then this property identifies the video's channel,
     * and the snippet.videoId property identifies the video.
     * - If the comment is a channel comment, then this property identifies the channel that the comment is about.
     */
    channelId?: string;
    /**
     * The ID of the video that the comment refers to. This property is only present if the comment was made on a video.
     */
    videoId?: string;
    /**
     * The comment's text. The text can be retrieved in either plain text or HTML.
	 *
     * (The `comments.list` and `commentThreads.list` methods
	 * both support a `textFormat` parameter, which specifies the desired text format.)
     *
     * Note that even the plain text may differ from the original comment text. For example, it may replace video links with video titles.
     */
    textDisplay?: string;
    /**
     * The original, raw text of the comment as it was initially posted or last updated.
     * The original text is only returned if it is accessible to the authenticated user,
     * which is only guaranteed if the user is the comment's author.
     */
    textOriginal?: string;
    /**
     * The unique ID of the parent comment. This property is only set if the comment was submitted as a reply to another comment.
     */
    parentId?: string;
    /**
     * This setting indicates whether the current viewer can rate the comment.
     */
    canRate?: boolean;
    /**
     * The rating the viewer has given to this comment.
     * Note that this property does not currently identify dislike ratings, though this behavior is subject to change.
     * In the meantime, the property value is like if the viewer has rated the comment positively.
     * The value is none in all other cases, including the user having given the comment a negative rating or not having rated the comment.
     */
    viewerRating?: 'like' | 'none';
    /**
     * The total number of likes (positive ratings) the comment has received.
     */
    likeCount?: number;
    /**
     * The comment's moderation status.
     * This property is only returned if the API request was authorized by the owner of the channel
     * or the video on which the requested comments were made.
     * In addition, note that this property is not set if the API request used the id filter parameter.
     */
    moderationStatus?: 'heldForReview' | 'likelySpam' | 'published' | 'rejected';
    /**
     * The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string;
    /**
     * The date and time when the comment was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    updatedAt?: string;
  };
}

export interface NgxYtdApiCommentListResult extends NgxYtdApiGenericResult {
  /**
   * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
   */
  nextPageToken?: string;
  /**
   * The `pageInfo` object encapsulates paging information for the result set.
   */
  pageInfo?: {
    /**
     * The total number of results in the result set.
     */
    totalResults?: number;
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number;
  };
  /**
   * A list of comments that match the request criteria.
   */
  items?: NgxYtdApiCommentListResultItem[];
}

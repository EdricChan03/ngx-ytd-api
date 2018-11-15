import { NgxYtdApiGenericOpts, NgxYtdApiGenericResource, NgxYtdApiStandardOpts } from 'ngx-ytd-api/core';

export interface NgxYtdApiCommentsResource extends NgxYtdApiGenericResource {
  /**
   * The ID that YouTube uses to uniquely identify the comment.
   *
   * See https://developers.google.com/youtube/v3/docs/comments#id for more info
   */
  id?: string;
  /**
   * The snippet object contains basic details about the comment.
   *
   * See https://developers.google.com/youtube/v3/docs/comments#snippet for more info
   */
  snippet?: {
    /**
     * The display name of the user who posted the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#snippet.authorDisplayName for more info
     */
    authorDisplayName?: string;
    /**
     * The URL for the avatar of the user who posted the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#snippet.authorProfileImageUrl for more info
     */
    authorProfileImageUrl?: string;
    /**
     * The URL of the comment author's YouTube channel, if available.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#snippet.authorChannelUrl for more info
     */
    authorChannelUrl?: string;
    /**
     * This object encapsulates information about the comment author's YouTube channel, if available.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#snippet.authorChannelId for more info
     */
    authorChannelId?: {
      /**
       * The ID of the comment author's YouTube channel, if available.
       *
       * See https://developers.google.com/youtube/v3/docs/comments#snippet.authorChannelId.value for more info
       */
      value?: string;
    }
    /**
     * The ID of the YouTube channel associated with the comment.
     * - If the comment is a video comment, then this property identifies the video's channel,
     * and the snippet.videoId property identifies the video.
     * - If the comment is a channel comment, then this property identifies the channel that the comment is about.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#channelId for more info
     */
    channelId?: string;
    /**
     * The ID of the video that the comment refers to. This property is only present if the comment was made on a video.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#videoId for more info
     */
    videoId?: string;
    /**
     * The comment's text. The text can be retrieved in either plain text or HTML.
     *
     * (The `comments.list` and `commentThreads.list` methods
     * both support a `textFormat` parameter, which specifies the desired text format.)
     *
     * Note that even the plain text may differ from the original comment text. For example, it may replace video links with video titles.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#textDisplay for more info
     */
    textDisplay?: string;
    /**
     * The original, raw text of the comment as it was initially posted or last updated.
     * The original text is only returned if it is accessible to the authenticated user,
     * which is only guaranteed if the user is the comment's author.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#textOriginal for more info
     */
    textOriginal?: string;
    /**
     * The unique ID of the parent comment. This property is only set if the comment was submitted as a reply to another comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#parentId for more info
     */
    parentId?: string;
    /**
     * This setting indicates whether the current viewer can rate the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#canRate for more info
     */
    canRate?: boolean;
    /**
     * The rating the viewer has given to this comment.
     * Note that this property does not currently identify dislike ratings, though this behavior is subject to change.
     * In the meantime, the property value is like if the viewer has rated the comment positively.
     * The value is none in all other cases, including the user having given the comment a negative rating or not having rated the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#viewerRating for more info
     */
    viewerRating?: 'like' | 'none';
    /**
     * The total number of likes (positive ratings) the comment has received.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#likeCount for more info
     */
    likeCount?: number;
    /**
     * The comment's moderation status.
     * This property is only returned if the API request was authorized by the owner of the channel
     * or the video on which the requested comments were made.
     * In addition, note that this property is not set if the API request used the id filter parameter.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#moderationStatus for more info
     */
    moderationStatus?: 'heldForReview' | 'likelySpam' | 'published' | 'rejected';
    /**
     * The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#publishedAt for more info
     */
    publishedAt?: string;
    /**
     * The date and time when the comment was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#updatedAt for more info
     */
    updatedAt?: string;
  };
}

export interface NgxYtdApiCommentsDeleteOpts extends NgxYtdApiStandardOpts {
  /**
   * The OAuth 2.0 access token
   * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to delete a comment
   */
  accessToken: string;
  /**
   * Specifies the comment ID for the resource that is being deleted
   *
   * See https://developers.google.com/youtube/v3/docs/comments/delete#id for more info
   */
  id: string;
}

export interface NgxYtdApiCommentsInsertOpts extends NgxYtdApiStandardOpts {
  /**
   * The OAuth 2.0 access token
   * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to delete a comment
   */
  accessToken: string;
  /**
   * Specifies the properties that the API will include
   *
   * See https://developers.google.com/youtube/v3/docs/comments/insert#part for more info
   */
  part: string;
}
export interface NgxYtdApiCommentsListOpts extends NgxYtdApiGenericOpts {
  /**
   * Specifies a comma-separated list of comment IDs for the resources that are being retrieved.
   *
   * Note: This parameter is a filter, where only one filter should be specified
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list#id for more info
   */
  id?: string;
  /**
   * Specifies the ID of the comment for which replies should be retrieved.
   *
   * Note: This parameter is a filter, where only one filter should be specified
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list#parentId for more info
   */
  parentId?: string;
  /**
   * Specifies the maximum number of items that should be returned in the results.
   *
   * Note: This parameter is not supported for use in conjunction with the id parameter.
   * Acceptable values are 1 to 100, inclusive. The default value is 20.
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list#maxResults for more info
   */
  maxResults?: number;
  /**
   * Identifies a specific page in the result set that should be returned.
   *
   * Note: This parameter is not supported for use in conjunction with the id parameter.
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list#pageToken for more info
   */
  pageToken?: string;
  /**
   * Indicates whether the API should return comments formatted as HTML or as plain text.
   *
   * Acceptable values are:
   * - html – Returns the comments in HTML format. This is the default value.
   * - plainText – Returns the comments in plain text format.
   * See https://developers.google.com/youtube/v3/docs/comments/list#textFormat for more info
   */
  textFormat?: 'html' | 'plainText';
}


/**
 * @deprecated Use {@link NgxYtdApiCommentListResource}
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiCommentsListResultItem extends NgxYtdApiCommentsResource { }

export interface NgxYtdApiCommentsListResult extends NgxYtdApiGenericResource {
  /**
   * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
   *
   * See https://developers.google.com/youtube/v3/docs/comments/list#nextPageToken
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
  items?: NgxYtdApiCommentsResource[];
}

export interface NgxYtdApiCommentsMarkAsSpamOpts extends NgxYtdApiStandardOpts {
  /**
   * The OAuth 2.0 access token
   * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to mark a comment as spam
   */
  accessToken: string;
  /**
   * Specifies a comma-separated list of IDs of comments that (according to the caller) should be classified as spam
   *
   * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam#id for more info
   */
  id: string;
}

export interface NgxYtdApiCommentsSetModerationStatusOpts extends NgxYtdApiStandardOpts {
  /**
   * The OAuth 2.0 access token
   * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to set the moderation status
   */
  accessToken: string;
  /**
   * Specifies a comma-separated list of IDs that identify the comments to update their moderation status
   *
   * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#id for more info
   */
  id: string;
  /**
   * Specifies the new moderation status of the specified comments
   *
   * Acceptable values:
   * - `heldForReview`: Marks a comment as awaiting review by a moderator
   * - `published`: Marks a comment as public
   * - `rejected`: Rejects a comment (Note: Also hides all replies to the rejected comment)
   *
   * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#moderationStatus for more info
   */
  moderationStatus: 'heldForReview' | 'published' | 'rejected';
  /**
   * Whether to indicate that you want to automatically reject any additional comments written by the comment's author
   *
   * Note: This parameter is only valid if the `moderationStatus` is also set to `rejected`
   *
   * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#banAuthor for more info
   */
  banAuthor?: boolean;
}

export interface NgxYtdApiCommentsUpdateOpts extends NgxYtdApiStandardOpts {
  /**
   * The OAuth 2.0 access token
   * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to set the moderation status
   */
  accessToken: string;
  /**
   * Identifies the properties that the API response will include
   *
   * See https://developers.google.com/youtube/v3/docs/comments/update#part for more info
   */
  part: string;
}

import { NgxYtdApiCommentsResource } from 'ngx-ytd-api/comments';
import {
  NgxYtdApiGenericResource,
  NgxYtdApiStandardParams,
  NgxYtdApiGenericResponse
} from 'ngx-ytd-api/common';

/**
 * Represents a resource for the comment thread API
 * @see [Resource representation](https://developers.google.com/youtube/v3/docs/commentThreads#resource)
 */
export interface NgxYtdApiCommentThreadsResource extends NgxYtdApiGenericResource {
  /**
   * The ID used by YouTube to uniquely identify the comment thread
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#id)
   */
  id?: string;
  /**
   * Contains basic details about the comment thread
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet)
   */
  snippet?: {
    /**
     * The YouTube channel that is associated with the comments in the thread
     *
     * Notes:
     * - If the comments are about a video, then the value identifies the channel that uploaded the video
     * (The `snippet.videoId` property identifies the video)
     * - If the comments refer to the channel itself, the `snippet.videoId` property will not have a value
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.channelId)
     */
    channelId?: string;
    /**
     * The ID of the video that the comments refer to (if any)
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.videoId)
     */
    videoId?: string;
    /**
     * The thread's top level comment
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.topLevelComment)
     */
    topLevelComment?: NgxYtdApiCommentsResource;
    /**
     * Indicates whether the current viewer can reply to the thread
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.canReply)
     */
    canReply?: boolean;
    /**
     * The total number of replies in response to the top level comment
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.totalReplyCount)
     */
    totalReplyCount?: number;
    /**
     * Indicates whether the thread and it's contents are visible to all YouTube users
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet.isPublic)
     */
    isPublic?: boolean;
  };
  /**
   * A container that contains a list of replies to the comment (if any exist)
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#replies)
   */
  replies?: {
    /**
     * A list of one or more replies to the top-level comment
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#replies.comments[])
     */
    comments?: NgxYtdApiCommentsResource[];
  };
}

/**
 * Represents parameters for the `list` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters)
 */
export interface NgxYtdApiCommentThreadsListParams extends NgxYtdApiStandardParams {
  /**
   * Instructs the API to return all comment threads associated with the specified channel
   *
   * Note: This parameter is a *filter*, where only one *filter* should be specified.
   *
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#allThreadsRelatedToChannelId)
   */
  allThreadsRelatedToChannelId?: string;
  /**
   * Instructs the API to return comment threads containing comments about the specified channel
   *
   * Note: This parameter is a *filter*, where only one *filter* should be specified.
   *
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#channelId)
   */
  channelId?: string;
  /**
   * A comma-separated list of comment thread IDs for the resources that should be retrieved
   *
   * Note: This parameter is a *filter*, where only one *filter* should be specified.
   *
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#id)
   */
  id?: string;
  /**
   * Instructs the API to return comment threads associated with the specified video ID
   *
   * Note: This parameter is a *filter*, where only one *filter* should be specified.
   *
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#videoId)
   *
   */
  videoId?: string;
  /**
   * Specifies the maximum number of items that should be returned
   * - Accepted values: a number between `1` to `100`
   * - Default value: `20`
   *
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#maxResults)
   */
  maxResults?: number;
  /**
   * Limits the returned comment threads to a specified moderation state.
   * - Accepted values:
   *   - `heldForReview` - Retrieve comment threads that are awaiting review by a moderator
   *   - `likelySpam` - Retrieve comment threads classified as likely to be spam
   *   - `published` - Retrieve threads of published comments
   * - Default value: `published`
   * - Note: This parameter is not supported with the `id` parameter
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#moderationStatus)
   */
  moderationStatus?: 'heldForReview' | 'likelySpam' | 'published';
  /**
   * Specifies the order in which the API should list comment threads
   * - Accepted values:
   *   - `time` - Comment threads are ordered by time
   *   - `relevance` - Comment threads are ordered by relevance
   * - Default value: `time`
   * - Note: This parameter is not supported with the `id` parameter
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#order)
   */
  order?: 'time' | 'relevance';
  /**
   * Specifies the page that should be returned in the result set
   *
   * Note: This parameter is not supported with the `id` parameter
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageToken)
   */
  pageToken?: string;
  /**
   * Returns comments that contain the specified search terms
   *
   * Note: This parameter is not supported with the `id` parameter
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#searchTerms)
   */
  searchTerms?: string;
  /**
   * Sets the text format to return the comments in
   * - Accepted values:
   *   - `html` - Returns the comments in HTML
   *   - `plainText` - Returns the comments in plain text format
   * - Default value: `html`
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#textFormat)
   */
  textFormat?: 'html' | 'plainText';
}

/** @deprecated Use {@link NgxYtdApiCommentThreadsListParams} */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiCommentThreadsListOpts extends NgxYtdApiCommentThreadsListParams { }

/**
 * Represents the response which is returned when the `list` method of the comment thread API is called
 * @see [Response structure](https://developers.google.com/youtube/v3/docs/commentThreads/list#response)
 */
export interface NgxYtdApiCommentThreadsListResponse extends NgxYtdApiGenericResponse {
  /**
   * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the list of results
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#nextPageToken)
   */
  nextPageToken?: string;
  /**
   * Contains paging information for the list of results
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageInfo)
   */
  pageInfo?: {
    /**
     * The total number of results in the list of results
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageInfo.totalResults)
     */
    totalResults?: number;
    /**
     * The number of results included in the API response
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageInfo.resultsPerPage)
     */
    resultsPerPage?: number;
  };
  /**
   * A list of comment threads that match the request criteria
   * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#items[])
   */
  items?: NgxYtdApiCommentThreadsResource[];
}

/**
 * Represents methods for the `insert` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
 */
export interface NgxYtdApiCommentThreadsInsertParams extends NgxYtdApiStandardParams {
  /**
   * Represents the properties that should be included in the response
   * @see [Parameter info](https://developers.google.com/youtube/v3/docs/commentThreads/insert#part)
   */
  part: string;
}

/** @deprecated Use {@link NgxYtdApiCommentThreadsInsertOpts} */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiCommentThreadsInsertOpts extends NgxYtdApiCommentThreadsInsertParams { }

/**
 * Represents methods for the `update` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
 */
export interface NgxYtdApiCommentThreadsUpdateParams extends NgxYtdApiStandardParams {
  /**
   * Represents the properties that should be included in the response
   * @see [Parameter info](https://developers.google.com/youtube/v3/docs/commentThreads/insert#part)
   */
  part: string;
}

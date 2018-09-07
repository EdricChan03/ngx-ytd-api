import { NgxYtdApiGenericOpts, NgxYtdApiGenericResult } from 'ngx-ytd-api/core';

/**
 * Options for {@link NgxYtdApiVideoService#list}
 */
export interface NgxYtdApiVideosListOpts extends NgxYtdApiGenericOpts {
  /**
   * Identifies the chart that should be retrieved.
   * Acceptable values:
   * - `mostPopular`: Return the most popular videos for the specified content region and video category.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#chart|developer docs} for more info.
   * Note: This parameter is a filter and only one filter is allowed
   */
  chart?: 'mostPopular';
  /**
   * Specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved.
   * In a video resource, the `id` property specifies the video's ID.
   * Note: This parameter is a filter and only one filter is allowed
   */
  id?: string;
  /**
   * Specifies the API to return videos that are liked or disliked by the authenticated user
   * Acceptable values:
   * - `dislike`: Returns only videos that are disliked by the authenticated user
   * - `like`: Returns only videos that are liked by the authenticated user
   * Note: This parameter can only be used in a properly authorized request.
   * Note: This parameter is a filter and only one filter is allowed
   */
  myRating?: 'dislike' | 'like';
  /**
   * Specifies the API to return localized resource metadata for a specific language that the YouTube website supports.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#hl|developer docs} for more info.
   */
  hl?: string;
  /**
   * Specifies the maximum height of the embedded YouTube player returned in the `player.embedHtml` property.
   * This parameter can be used to specify a height appropriate for your app's layout.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#maxHeight|developer docs} for more info
   * Note: If the `maxWidth` property is also specified, the player may be shorter
   * than the `maxHeight` in order to not violate the maximum width.
   * Acceptable values are 72 to 8192, inclusive.
   */
  maxHeight?: number;
  /**
   * Specifies the maximum results that should be returned.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#maxResults|developer docs} for more info
   * Note: This parameter is to be used for the `myRating` parameter, but should not
   * be used with the `id` parameter.
   * Acceptable values: 1 to 50, inclusive. 5 is the default number.
   */
  maxResults?: number;
  /**
   * Specifies the maximum width of the embedded YouTube player returned in the `player.embedHtml` property.
   * This parameter can be used to specify a width appropriate for your app's layout.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#maxWidth|developer docs} for more info
   * Note: If the `maxHeight` property is also specified, the player may be shorter
   * than the `maxWidth` in order to not violate the maximum width.
   * Acceptable values are 72 to 8192, inclusive.
   */
  maxWidth?: number;
  /**
   * Identifies a specific page in the result set that should be returned.
   *
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#pageToken|developer docs} for more info
   * Note: This parameter is to be used with the `myRating` parameter, but is not to be used
   * with the `id` parameter.
   */
  pageToken?: string;
  /**
   * Tells the API to select a video chart available in the specific region.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#regionCode|developer docs} for more info
   * Note: This parameter is to only be used with the `chart` parameter.
   */
  regionCode?: string;
  /**
   * This property identifies the video category for which the video should be retrieved.
   * See the {@link https://developers.google.com/youtube/v3/docs/videos/list#regionCode|developer docs} for more info
   * Note: This parameter is to only be used with the `chart` parameter.
   * By default, charts are not restricted to a particular category.
   * The default value is 0.
   */
  videoCategoryById?: string;
}

export interface NgxYtdApiVideosListResultItemSuggestionTagSuggestion {
  tag?: string;
  categoryRestricts?: string[];
}

export interface NgxYtdApiVideosListResultItemAudioStream {
  channelCount?: number;
  codec?: string;
  bitrateBps?: number;
  vendor?: string;
}

export interface NgxYtdApiVideosListResultItemVideoStream {
  widthPixels?: number;
  heightPixels?: number;
  frameRateFps?: number;
  aspectRatio?: number;
  codec?: string;
  bitrateBps?: number;
  rotation?: string;
  vendor?: string;
}

export interface NgxYtdApiVideosListResultItemLocalizations {
  [key: string]: NgxYtdApiVideosListResultItemLocalization;
}

export interface NgxYtdApiVideosListResultItemLocalization {
  title?: string;
  description?: string;
}

export interface NgxYtdApiVideosListResultItemThumbnails {
  [key: string]: NgxYtdApiVideosListResultItemThumbnail;
}

export interface NgxYtdApiVideosListResultItemThumbnail {
  /**
   * The URL of the thumbnail
   */
  url?: string;
  /**
   * The width of the thumbnail
   */
  width?: number;
  /**
   * The height of the thumbnail
   */
  height?: number;
}

export interface NgxYtdApiVideosListResultItem {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: {
    publishedAt?: string;
    channelId?: string;
    title?: string;
    description?: string;
    thumbnails?: NgxYtdApiVideosListResultItemThumbnails;
    channelTitle?: string;
    tags?: string[];
    categoryId?: string;
    liveBroadcastContent?: string;
    defaultLanguage?: string;
    localized?: {
      title?: string;
      description?: string;
    };
    defaultAudioLanguage?: string;
  };
  contentDetails?: {
    duration?: string;
    dimension?: string;
    definition?: string;
    caption?: string;
    licensedContent?: boolean;
    regionRestriction?: {
      allowed?: string[];
      blocked?: string[];
    };
    contentRating?: {
      /**
       * @todo Add better documentation here
       */
      [key: string]: string | string[];
    };
    projection?: string;
    hasCustomThumbnail?: boolean;
  };
  status?: {
    uploadStatus?: string;
    failureReason?: string;
    rejectionReason?: string;
    privacyPolicy?: string;
    publishAt?: string;
    license?: string;
    embeddable?: boolean;
    publicStatsViewable?: boolean;
  };
  statistics?: {
    viewCount?: number;
    likeCount?: number;
    dislikeCount?: number;
    favoriteCount?: number;
    commentCount?: number;
  };
  player?: {
    embedHtml?: string;
    embedHeight?: number;
    embedWidth?: number;
  };
  topicDetails?: {
    topicIds?: string[];
    relevantTopicIds?: string[];
    topicCategories?: string[];
  };
  recordingDetails?: {
    recordingDate?: string;
  };
  fileDetails?: {
    fileName?: string;
    fileSize?: number;
    fileType?: string;
    container?: string;
    videoStreams?: NgxYtdApiVideosListResultItemVideoStream[];
    audioStreams?: NgxYtdApiVideosListResultItemAudioStream[];
    durationMs?: number;
    bitrateBps?: number;
    creationTime?: string;
  };
  processingDetails?: {
    processingStatus?: string;
    processingProgress?: {
      partsTotal?: number;
      partsProcessed?: number;
      timeLeftMs?: number;
    };
    processingFailureReason?: string;
    fileDetailsAvailability?: string;
    processingIssuesAvailability?: string;
    tagSuggestionsAvailability?: string;
    editorSuggestionsAvailability?: string;
    thumbnailsAvailability?: string;
  };
  suggestions?: {
    processingErrors?: string[];
    processingWarnings?: string[];
    processingHints?: string[];
    tagSuggestions?: NgxYtdApiVideosListResultItemSuggestionTagSuggestion[];
    editorSuggestions?: string[];
  };
  liveStreamingDetails?: {
    actualStartTime?: string;
    actualEndTime?: string;
    scheduledStartTime?: string;
    scheduledEndTime?: string;
    concurrentViewers?: number;
    activeLiveChatId?: string;
  };
  localizations?: NgxYtdApiVideosListResultItemLocalizations;
}
export interface NgxYtdApiVideosListResult extends NgxYtdApiGenericResult {
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo?: {
    totalResults?: number;
    resultsPerPage?: number;
  };
  items?: NgxYtdApiVideosListResultItem[];
}

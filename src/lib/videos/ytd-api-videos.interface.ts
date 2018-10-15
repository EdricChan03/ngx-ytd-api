import { NgxYtdApiGenericOpts, NgxYtdApiGenericResource } from 'ngx-ytd-api/core';

/**
 * Options for {@link NgxYtdApiVideosService#getRating}
 */
export interface NgxYtdApiVideosGetRatingOpts extends NgxYtdApiGenericOpts {
  /**
   * Specifies a comma-separated list of the YouTube video ID(s) for retrieving rating data
   *
   * See https://developers.google.com/youtube/v3/docs/videos/getRating#id for more info
   */
  id: string;
  /**
   * Note: This parameter is optional.
   * Note: This parameter can only be used in a properly authorized request.
   * Note: This parameter is intended for YouTube Creators.
   *
   * See https://developers.google.com/youtube/v3/docs/videos/getRating#onBehalfOfContentOwner for more info
   */
  onBehalfOfContentOwner?: string;
}

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

export interface NgxYtdApiVideosResourceSuggestionTagSuggestion {
  /**
   * The keyword tag suggested for the video
   *
   * See https://developers.google.com/youtube/v3/docs/videos#suggestions.tagSuggestions[].tag for more info
   */
  tag?: string;
  /**
   * An array of video categories for which the tag is relevant
   *
   * See https://developers.google.com/youtube/v3/docs/videos#suggestions.tagSuggestions[].categoryRestricts[] for more info
   */
  categoryRestricts?: string[];
}

export interface NgxYtdApiVideosResourceAudioStream {
  /**
   * The number of audio channels that the stream contains
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].channelCount for more info
   */
  channelCount?: number;
  /**
   * The audio codec that the stream uses
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].codec for more info
   */
  codec?: string;
  /**
   * The audio stream's bitrate, in bits per second
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].bitrateBps for more info
   */
  bitrateBps?: number;
  /**
   * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].vendor for more info
   */
  vendor?: string;
}

export interface NgxYtdApiVideosResourceVideoStream {
  /**
   * The encoded video's content width in pixels
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].widthPixels for more info
   */
  widthPixels?: number;
  /**
   * The encoded video's content height in pixels
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].heightPixels for more info
   */
  heightPixels?: number;
  /**
   * The video's stream rate in frames per second (FPS)
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].frameRateFps for more info
   */
  frameRateFps?: number;
  /**
   * The video content's display aspect ratio, which specifies the aspect ratio in which
   * the video should be displayed.
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].aspectRatio for more info
   */
  aspectRatio?: number;
  /**
   * The video codec that the stream uses
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].codec for more info
   */
  codec?: string;
  /**
   * The video stream's bitrate in bits per second
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].bitrateBps for more info
   */
  bitrateBps?: number;
  /**
   * The amount that YouTube needs to rotate the original source content to properly display the video
   * Valid values:
   * - `clockwise`: Indicates that the video needs to be rotated 90° clockwise
   * - `counterClockwise`: Indicates that the video needs to be rotated 90° counter-cockwise
   * - `none`: Indicates that the video does not need to be rotated
   * - `other`: Indicates that the video needs to be rotated in some other, non-trivial way
   * - `upsideDown`: Indicates that the video needs to be rotated upside down
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].rotation for more info
   */
  rotation?: string;
  /**
   * A value that uniquely identifies a vendor
   * Note: Typically, the value is a four-letter vendor code
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].vendor for more info
   */
  vendor?: string;
}

export interface NgxYtdApiVideosResourceLocalizations {
  /**
   * The language of the localized text associated with the key value
   *
   * See https://developers.google.com/youtube/v3/docs/videos#localizations.(key) for more info
   */
  [key: string]: NgxYtdApiVideosResourceLocalization;
}

export interface NgxYtdApiVideosResourceLocalization {
  /**
   * The localized video title
   *
   * See https://developers.google.com/youtube/v3/docs/videos#localizations.(key).title for more info
   */
  title?: string;
  /**
   * The localized video description
   *
   * See https://developers.google.com/youtube/v3/docs/videos#localizations.(key).description for more info
   */
  description?: string;
}

export interface NgxYtdApiVideosResourceThumbnails {
  /**
   * Valid key values:
   * - `default`: The default thumbnail image
   * (Default size of video thumbnail: 120px wide, 90px tall; channel thumbnail: 88px wide, 88px tall)
   * - `medium`: A higher resolution version of the thumbnail than the `default` resolution image
   * (Default size of video thumbnail: 320px wide, 180px tall; channel thumbnail: 240px wide, 240px tall)
   * - `high`: A higher resolution version of the thumbnail than the `medium` resolution image
   * (Default size of video thumbnail: 480px wide, 360px tall; channel thumbnail: 800px wide, 800px tall)
   * - `standard`: A higher resolution version of the thumbnail than the `high` resolution image
   * (Default size of video thumbnail: 640px wide, 480px tall)
   * - `maxres`: The highest resolution version of the thumbnail
   * (Default size of video thumbnail: 1280px wide, 720px tall)
   *
   * See https://developers.google.com/youtube/v3/docs/videos#snippet.thumbnails.(key) for more info
   */
  [key: string]: NgxYtdApiVideosResourceThumbnail;
}

export interface NgxYtdApiVideosResourceThumbnail {
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

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceAudioStream} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemAudioStream extends NgxYtdApiVideosResourceAudioStream {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceLocalization} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemLocalization extends NgxYtdApiVideosResourceLocalization {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceLocalizations} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemLocalizations extends NgxYtdApiVideosResourceLocalizations {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceThumbnail} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemThumbnail extends NgxYtdApiVideosResourceThumbnail {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceThumbnails} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemThumbnails extends NgxYtdApiVideosResourceThumbnails {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceSuggestionTagSuggestion} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemSuggestionTagSuggestion extends NgxYtdApiVideosResourceSuggestionTagSuggestion {}

/**
 * @deprecated Use {@link NgxYtdApiVideosResourceVideoStream} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItemVideoStream extends NgxYtdApiVideosResourceVideoStream {}
/**
 * A video resource
 */
export interface NgxYtdApiVideosResource {
  /**
   * Identifies the result's type.
   * (Note: This value should be set to `youtube#video`)
   *
   * See https://developers.google.com/youtube/v3/docs/videos#kind for more info
   */
  kind?: string;
  /**
   * The Etag of this resource.
   *
   * See https://developers.google.com/youtube/v3/docs/videos#etag for more info
   */
  etag?: string;
  /**
   * The ID used by YouTube to uniquely identify the video.
   *
   * See https://developers.google.com/youtube/v3/docs/videos#id for more info
   */
  id?: string;
  /**
   * Contains basic details about the video (e.g. title, description, category)
   *
   * See https://developers.google.com/youtube/v3/docs/videos#snippet for more info
   */
  snippet?: {
    /**
     * The date and time that the video was published
     * Note: This time can be different than the time that the video was uploaded
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.publishedAt for more info
     */
    publishedAt?: string;
    /**
     * The ID used by YouTube to identify the channel that the video was uploaded to
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.channelId for more info
     */
    channelId?: string;
    /**
     * The video's title
     * Note: This value has a maximum length of 100 characters and may contain all valid
     * UTF-8 characters except `<` and `>`.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.title for more info
     */
    title?: string;
    /**
     * The video's description
     * Note: This value has a maximum length of 5000 characters and may contain all valid
     * UTF-8 characters except `<` and `>`.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.description for more info
     */
    description?: string;
    /**
     * An array of thumbnail images associated with the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.thumbnails for more info
     */
    thumbnails?: NgxYtdApiVideosResourceThumbnails;
    /**
     * The channel title of the channel that the video belongs to
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.channelTitle for more info
     */
    channelTitle?: string;
    /**
     * An array of keyword tags associated with the video
     * Note: Tags can contain spaces.
     * Note: This property's value has a maximum length of 500 characters.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.tags[] for more info.
     */
    tags?: string[];
    /**
     * The YouTube video category associated with the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId for more info
     */
    categoryId?: string;
    /**
     * Indicates if the video is an upcoming/currently live broadcast
     * Valid values:
     * - `live`
     * - `none`
     * - `upcoming`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.liveBroadcastContent for more info
     */
    liveBroadcastContent?: string;
    /**
     * The language of the text in the resource's `snippet.title` and `snippet.description` properties
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.defaultLanguage for more info
     */
    defaultLanguage?: string;
    /**
     * Contains either a localized title and description for the video or the title in the default
     * language for the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.localized for more info
     */
    localized?: {
      /**
       * The localized video title
       *
       * See https://developers.google.com/youtube/v3/docs/videos#snippet.localized.title for more info
       */
      title?: string;
      /**
       * The localized description
       *
       * See https://developers.google.com/youtube/v3/docs/videos#snippet.localized.description for more info
       */
      description?: string;
    };
    /**
     * Specifies the language spoken in the video's default audio track
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet.defaultAudioLanguage for more info
     */
    defaultAudioLanguage?: string;
  };
  /**
   * Contains info about the video content
   *
   * See https://developers.google.com/youtube/v3/docs/videos#contentDetails for more info
   */
  contentDetails?: {
    /**
     * The length of the video in an ISO 8601 duration
     *
     * See See https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration for more info
     */
    duration?: string;
    /**
     * Indicates whether the video is available in 2D or 3D
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.dimension for more info
     */
    dimension?: string;
    /**
     * Indicates whether the video is available in high definition or only in standard definition
     * Valid values:
     * - `hd`
     * - `sd`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.definition for more info
     */
    definition?: string;
    /**
     * Indicates whether captions are available for the video
     * Valid values:
     * - `false`
     * - `true`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.caption for more info
     */
    caption?: string;
    /**
     * Indicates whether the video represents licensed content, which means that the content
     * was uploaded to a channel linked to a YouTube content partner and then claimed by that
     * partner.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.licensedContent for more info
     */
    licensedContent?: boolean;
    /**
     * Contains info about the countries where a video is/is not viewable.
     * Note: This object will either have the `allowed` property or the `blocked` property
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.regionRestriction
     * for more info
     */
    regionRestriction?: {
      /**
       * A list of region codes that identify countries where the video is viewable in
       *
       * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.regionRestriction.allowed[]
       * for more info
       */
      allowed?: string[];
      /**
       * A list of region codes that identify countries where the video is blocked
       *
       * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.regionRestriction.blocked[]
       * for more info
       */
      blocked?: string[];
    };
    /**
     * Specifies the rating that the video received under various rating schemes
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.contentRating for more info
     */
    contentRating?: {
      /**
       * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.contentRating for
       * all available ratings
       */
      [key: string]: string | string[];
    };
    /**
     * Specifies the projection format of the video
     * Valid values:
     * - `360`
     * - `rectangular`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.projection for more info
     */
    projection?: string;
    /**
     * Indicates whether the video uploader has added a custom thumbnail image for the video
     * Note: This property is only visible to the video uploader
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails.hasCustomThumbnail for more info
     */
    hasCustomThumbnail?: boolean;
  };
  /**
   * Contains info about the video's uploading, processing and privacy statuses
   *
   * See https://developers.google.com/youtube/v3/docs/videos#status for more info
   */
  status?: {
    /**
     * The status of the uploaded video
     * Valid values:
     * - `deleted`
     * - `failed`
     * - `processed`
     * - `rejected`
     * - `uploaded`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus for more info
     */
    uploadStatus?: string;
    /**
     * This value explains why a video failed to upload
     * Note: This property is only present if the `uploadStatus` property indicates that the upload
     * failed.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.failureReason for more info
     */
    failureReason?: string;
    /**
     * This value explains why YouTube rejected the video
     * Note: This property is only present if the `uploadStatus` property indicates that the upload
     * was rejected.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.rejectionReason for more info
     */
    rejectionReason?: string;
    /**
     * The video's privacy status
     * Valid values:
     * - `private`
     * - `public`
     * - `unlisted`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.privacyStatus for more info
     */
    privacyStatus?: string;
    /**
     * The date and time the video is scheduled to publish
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.publishAt for more info
     */
    publishAt?: string;
    /**
     * The video's license
     * Valid values:
     * - `creativeCommon`
     * - `youtube`
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.license for more info
     */
    license?: string;
    /**
     * Indicates whether the video can be embeddable on another website
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.embeddable for more info
     */
    embeddable?: boolean;
    /**
     * Indicates whether the extended video statistics on the video's watch page are publicly
     * accessible
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status.publicStatsViewable for more info
     */
    publicStatsViewable?: boolean;
  };
  /**
   * Contains statistics about the video
   *
   * See https://developers.google.com/youtube/v3/docs/videos#statistics for more info
   */
  statistics?: {
    /**
     * The number of times the video has been viewed
     *
     * See https://developers.google.com/youtube/v3/docs/videos#statistics.viewCount for more info
     */
    viewCount?: number;
    /**
     * The number of users who have indicated that they have liked the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount for more info
     */
    likeCount?: number;
    /**
     * The number of users who have indicated that they have disliked the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#statistics.dislikeCount for more info
     */
    dislikeCount?: number;
    /**
     * See https://developers.google.com/youtube/v3/docs/videos#statistics.favoriteCount for more info
     *
     * @deprecated Since 28 August 2015, the property's value is always set to 0
     */
    favoriteCount?: number;
    /**
     * The number of comments on the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#statistics.commentCount for more info
     */
    commentCount?: number;
  };
  /**
   * Contains information used to play the video in an embedded player
   *
   * See https://developers.google.com/youtube/v3/docs/videos#player for more info
   */
  player?: {
    /**
     * An `<iframe>` tag that embeds a player that plays the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#player.embedHtml for more info
     */
    embedHtml?: string;
    /**
     * The height of the player returned in the `player.embedHtml` property
     *
     * See https://developers.google.com/youtube/v3/docs/videos#player.embedHeight for more info
     */
    embedHeight?: number;
    /**
     * The width of the player returned in the `player.embedHtml` property
     *
     * See https://developers.google.com/youtube/v3/docs/videos#player.embedWidth for more info
     */
    embedWidth?: number;
  };
  /**
   * Contains information about topics associated with the video
   *
   * See https://developers.google.com/youtube/v3/docs/videos#topicDetails for more info
   */
  topicDetails?: {
    /**
     * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.topicIds[] for more info
     * @deprecated Since 10 November 2016, the API no longer returns values for this property,
     * and any topics associated with a video are now returned by the
     * `topicDetails.relevantTopicIds[]` property value.
     */
    topicIds?: string[];
    /**
     * A list of topic IDs that are relevant to the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.relevantTopicIds[] for more info
     *
     * @deprecated This has been deprecated since 10 November 2016 and has been unsupported since
     * 10 November 2017
     */
    relevantTopicIds?: string[];
    /**
     * A list of Wikipedia URLs that provide a high-level description of the video's content
     *
     * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.topicCategories[] for more info
     */
    topicCategories?: string[];
  };
  /**
   * Contains information about the location, date and address where the video was recorded
   *
   * See https://developers.google.com/youtube/v3/docs/videos#recordingDetails for more info
   */
  recordingDetails?: {
    /**
     * The text description of the location where the video was recorded
     *
     * See https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription for more info
     *
     * @deprecated Since 1 June 2017, this property has been deprecated.
     */
    locationDescription?: string;
    /**
     * The geolocation information associated with the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.location for more info
     */
    location?: {
      /**
       * The latitude in degrees
       *
       * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.location.latitude for more info
       *
       * @deprecated Since 1 June 2017, this property has been deprecated
       */
      latitude?: number;
      /**
       * Longitude in degrees
       *
       * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.location.longitude for more info
       *
       * @deprecated This property has been deprecated since 1 June 2017
       */
      longitude?: number;
      /**
       * Altitude above the reference ellipsoid, in meters.
       *
       * See https://developers.google.com/youtube/v3/docs/videos#topicDetails.location.altitude for more info
       *
       * @deprecated This property has been deprecated since 9 july 2018
       */
      altitude?: number;
    }
    /**
     * The date and time when the video was recorded in ISO 8601 format
     *
     * See https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate for more info
     */
    recordingDate?: string;
  };
  /**
   * Contains info about the video file that was uploaded to YouTube (such as the file's resolution,
   * duration, audio, etc.)
   * Note: This data can only be retrieved by the video owner
   *
   * See https://developers.google.com/youtube/v3/docs/videos#fileDetails for more info
   */
  fileDetails?: {
    /**
     * The uploaded file's name
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.fileName for more info
     */
    fileName?: string;
    /**
     * The uploaded file's size in bytes
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.fileSize for more info
     */
    fileSize?: number;
    /**
     * The uploaded file's type as detected by YouTube's video processing engine
     * Valid values:
     * - `archive`: Indicates that the file is an archive file (e.g. `zip` files)
     * - `audio`: Indicates that the file is an audio file (e.g. `mp3` files)
     * - `document`: Indicates that the file is a document/text file (e.g. MS Word documents)
     * - `image`: Indicates that the file is an image file (e.g. `.jpeg` files)
     * - `other`: Indicates that the file is another non-video file type
     * - `project`: Indicates that the file is a video project file (e.g. a Microsoft Windows Movie Maker project)
     * - `video`: Indicates that the file is a known video file type (e.g. `mp4` files)
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.fileType for more info
     */
    fileType?: string;
    /**
     * The uploaded video file's container format
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.container for more info
     */
    container?: string;
    /**
     * An array of video streams contained in the uploaded video file
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[] for more info
     */
    videoStreams?: NgxYtdApiVideosResourceVideoStream[];
    /**
     * An array of audio streams contained in the uploaded video file
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[] for more info
     */
    audioStreams?: NgxYtdApiVideosResourceAudioStream[];
    /**
     * The length of the uploaded video in milliseconds
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.durationMs for more info
     */
    durationMs?: number;
    /**
     * The uploaded video file's combined (audio & video) bitrate in bits per second
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.bitrateBps for more info
     */
    bitrateBps?: number;
    /**
     * The date and time when the uploaded video file was created in ISO 8601 format
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.creationTime for more info
     */
    creationTime?: string;
  };
  /**
   * Contains info about YouTube's progress in processing the uploaded video file
   *
   * See https://developers.google.com/youtube/v3/docs/videos#processingDetails for more info
   */
  processingDetails?: {
    /**
     * The video's processing status
     * Valid values:
     * - `failed`: Indicates that the video processing has failed
     * - `processing`: Indicates that the video is currently being processed
     * - `succeeded`: Indicates that the video has been successfully proceesed
     * - `terminated`: Indicates that processing information is no longer available
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingStatus for more info
     */
    processingStatus?: string;
    /**
     * Contains info about the progress YouTube has made in processing the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingProgress for more info
     */
    processingProgress?: {
      /**
       * An estimate of the total number of parts that need to be processed for the video
       *
       * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingProgress.partsTotal for more info
       */
      partsTotal?: number;
      /**
       * Tbe number of parts of the video that YouTube has already processed
       *
       * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingProgress.partsProcessed for more info
       */
      partsProcessed?: number;
      /**
       * An estimate of the amount of time, in milliseconds, that YouTube needs to finish processing the video
       *
       * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingProgress.timeLeftMs for more info
       */
      timeLeftMs?: number;
    };
    /**
     * The reason that YouTube failed to process the video
     * Valid values:
     * - `other`: Indicates that some other processing component has failed
     * - `streamingFailed`: Indicates that the video could not be sent to streamers
     * - `transcodeFailed`: Indicates that content transcoding has failed
     * - `uploadFailed`: Indicates that file delivery has failed
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingFailureReason for more info
     */
    processingFailureReason?: string;
    /**
     * Indicates whether file details are available for the uploaded video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.fileDetailsAvailability for more info
     */
    fileDetailsAvailability?: string;
    /**
     * Indicates whether the video processing engine has generated suggestions that might improve
     * YouTube's ability to process the video, warnings that explain video processing problems,
     * or errors that cause video processing problems
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.processingIssuesAvailability for more info
     */
    processingIssuesAvailability?: string;
    /**
     * Indicates whether keyword (tag) suggestions are available for the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.tagSuggestionsAvailability for more info
     */
    tagSuggestionsAvailability?: string;
    /**
     * Indicates whether video editing suggestions, which might improve video quality or the
     * playback experience, are available for the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.editorSuggestionsAvailability for more info
     */
    editorSuggestionsAvailability?: string;
    /**
     * Indicates whether thumbnail images have been generated for the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails.thumbnailsAvailability for more info
     */
    thumbnailsAvailability?: string;
  };
  /**
   * Contains suggestions that identify opportunities to improve the video quality or the metadata
   * for the uploaded video
   *
   * See https://developers.google.com/youtube/v3/docs/videos#suggestions for more info
   */
  suggestions?: {
    /**
     * An array of errors that will prevent YouTube from successfully processing the video
     * Valid values:
     * - `archiveFile`: An archive file (e.g. a zip archive)
     * - `audioFile`: An audio file (e.g. an mp3 file)
     * - `docFile`: A document/text file (e.g. a MS Word document file)
     * - `imageFile`: An image file (e.g. a jpeg image)
     * - `notAVideoFile`: Other non-video file
     * - `projectFile`: Movie project file (e.g. a Microsoft Windows Movie Maker project)
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.processingErrors[] for more info
     */
    processingErrors?: string[];
    /**
     * An array of reasons why YouTube may have difficulty transcoding the uploaded video or that
     * might result in an erroneous transcoding
     * Valid values:
     * - `hasEditlist`: Note that edit lists are currently unsupported
     * - `inconsistentResolution`: Conflicting container and stream resolutions
     * - `problematicAudioCodec`: An audio codec that is known to cause problems was used
     * - `problematicVideoCodec`: A video codec that is known to cause problems was used
     * - `unknownAudioCodec`: Unrecognized audio codec, transcoding is likely to fail
     * - `unknownContainer`: Unrecognized file format, transcoding is likely to fail
     * - `unknownVideoCodec`: Unrecognized video codec, transcoding is likely to fail
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.processingWarnings[] for more info
     */
    processingWarnings?: string[];
    /**
     * An array of suggestions that may improve YouTube's ability to process the video
     * Valid values:
     * - `nonStreamableMov`: The MP4 file is not streamable, which will slow down the processing
     * - `sendBestQualityVideo`: Probably a better quality of the video exists
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.processingHints[] for more info
     */
    processingHints?: string[];
    /**
     * An array of keyword tags that could be added to the video's metadata to increase the chances
     * that users will find your video when searching or browsing on YouTube
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.tagSuggestions[] for more info
     */
    tagSuggestions?: NgxYtdApiVideosResourceSuggestionTagSuggestion[];
    /**
     * An array of video editing suggestions that might improve the video quality/playback
     * experience of the uploaded video
     * Valid values:
     * - `audioQuietAudioSwap`: The audio track appears silent and could be swapped with a better quality one
     * - `videoAutoLevels`: Picture brightness levels seem off and could be corrected
     * - `videoCrop`: Margins (mattes) detected around the picture could be cropped
     * - `videoStabilize`: The video appears shaky and could be stabilized
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.processingHints[] for more info
     */
    editorSuggestions?: string[];
  };
  /**
   * Contains metadata about a live video broadcast
   * Note: This will be present if the video is an upcoming, live or completed live broadcast
   *
   * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails for more info
   */
  liveStreamingDetails?: {
    /**
     * The time that the broadcast actually started in ISO 8601 format
     * Note: This value will not be available until the broadcast begins
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.actualStartTime for more info
     */
    actualStartTime?: string;
    /**
     * The time that the broadcast actually ended in ISO 8601 format
     * Note: This value will not be available until the broadcast begins
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.actualEndTime for more info
     */
    actualEndTime?: string;
    /**
     * The time that the broadcast is scheduled to begin in ISO 8601 format
     * Note: This value will not be available until the broadcast begins
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.scheduledStartTime for more info
     */
    scheduledStartTime?: string;
    /**
     * The time that the broadcast is scheduled to end in ISO 8601 format
     * Note: This value will not be available until the broadcast begins
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.scheduledEndTime for more info
     */
    scheduledEndTime?: string;
    /**
     * The number of viewers currently watching the broadcast
     * Note: This property and its value will be present if the broadcast has current viewers
     * and the broadcast owner has not hidden the viewcount for the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.scheduledEndTime for more info
     */
    concurrentViewers?: number;
    /**
     * The ID of the currently active live chat attached to this video
     * Note: This field is filled only if the video is a currently live broadcast that has live chat
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails.activeLiveChatId for more info
     */
    activeLiveChatId?: string;
  };
  /**
   * Contains translations of the video's metadata
   */
  localizations?: NgxYtdApiVideosResourceLocalizations;
}
/**
 * @deprecated Use {@link NgxYtdApiVideosResource} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiVideosListResultItem extends NgxYtdApiVideosResource {}
export interface NgxYtdApiVideosListResult extends NgxYtdApiGenericResource {
  /**
   * The token that can be passed via the `pageToken` parameter to retrieve the next page
   *
   * See https://developers.google.com/youtube/v3/docs/videos/list#nextPageToken for more info
   */
  nextPageToken?: string;
  /**
   * The token that can be passed via the `pageToken` parameter to retrieve the previous page
   *
   * See https://developers.google.com/youtube/v3/docs/videos/list#prevPageToken for more info
   */
  prevPageToken?: string;
  /**
   * Contains paging info for the results
   *
   * See https://developers.google.com/youtube/v3/docs/videos/list#pageInfo fror more info
   */
  pageInfo?: {
    /**
     * The total number of results
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#pageInfo.totalResults for more info
     */
    totalResults?: number;
    /**
     * The number of results included per page
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#pageInfo.resultsPerPage for more info
     */
    resultsPerPage?: number;
  };
  /**
   * A list of videos that match the request criteria
   *
   * See https://developers.google.com/youtube/v3/docs/videos/list#items[] for more info
   */
  items?: NgxYtdApiVideosResource[];
}

# API for search

```typescript
import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';
```

## Notes

> - :warning: Since the library is in **alpha**, some of the APIs you see below **may change or be removed entirely**. Please check back to this page weekly.

_Updated as of `1.0.0-alpha.3`_

---

## Docs

See the [readme for search](../../src/lib/search/README.md) to view the docs.

---

## Methods

### `NgxYtdApiService#search`

Searches for content on YouTube using the YouTube Data API v3.

#### Parameters

Name | Description | Notes
---|---|---
`query: string` | The query to search for | -
`opts?: NgxYtdApiSearchListOpts` | Options for the API | See [NgxYtdApiSearchListOpts](#ngxytdapisearchlistopts) for all properties

#### Returns

`Observable<NgxYtdApiSearchListResult>`: Results of the search as an observable

---

## Interfaces

### `NgxYtdApiSearchListOpts`

Search options for `NgxYtdApiSearchService#list`.

#### Properties


<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>channelId?: string</code></td>
      <td><p>The channel ID to search videos from</p></td>
    </tr>
    <tr>
      <td><code>channelType?: 'any | 'show'</code></td>
      <td>
        <p>Restricts a search to a particular type of channel.</p>
        <p>Accepted values:</p>
        <ul>
          <li><code>any</code>: Return all channels</li>
          <li><code>show</code>: Only return shows</li>
        </ul>
    </tr>
    <tr>
      <td><code>eventType?: 'completed' | 'live' | 'upcoming'</code></td>
      <td>
        <p>Restricts a search to broadcast events</p>
        <p><strong>Note:</strong> If a value is specified for this parameter, the parameter <code>type</code> must be set to <code>video</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>location?: string</code></td>
      <td>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#location">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>locationRadius?: string</code></td>
      <td>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#locationRadius">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>maxResults?: number</code></td>
      <td>
        <p>Maximum results for the response</p>
        <p>Allowed values: <code>0</code> to <code>50</code></p>
      </td>
    </tr>
    <tr>
      <td><code>order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount'</code></td>
      <td>
        <p>Specifies the order of resources in the response</p>
        <p><strong>Default:</strong> <code>'relevance'</code></p>
      </td>
    </tr>
    <tr>
      <td><code>pageToken?: string</code></td>
      <td>
        <p>The page token to retrieve a response from</p>
      </td>
    </tr>
    <tr>
      <td><code>publishedAfter?: string</code></td>
      <td>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#publishedAfter">API docs</a> for more info</p>
        <p><strong>Allowed values:</strong> an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)</p>
      </td>
    </tr>
    <tr>
      <td><code>publishedBefore?: string</code></td>
      <td>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#publishedBefore">API docs</a> for more info</p>
        <p><strong>Allowed values:</strong> an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)</p>
      </td>
    </tr>
    <tr>
      <td><code>regionCode?: string</code></td>
      <td>
        <p>Specifies the API to return search results for videos that can be viewed in the specified country</p>
        <p><strong>Allowed values:</strong> an <a href="http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm">ISO 3166-1 alpha-2</a> country code.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#regionCode">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>relevanceLanguage?: string</code></td>
      <td>
        <p>Specifies the API to return search results that are most relevant to the specified language</p>
        <p><strong>Allowed values:</strong> an <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1 two-letter language code</a></p>
        <p>However, you should use the values <code>zh-Hans</code> for simplified Chinese and <code>zh-Hant</code> for traditional Chinese.</p>
        <p><strong>Note:</strong> Results in other languages will still be returned if they are highly relevant to the search query term.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#regionCode">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>safeSearch?: 'moderate' | 'none' | 'strict'</code></td>
      <td>
        <p>Indicates whether the search results should include restricted content as well as standard content.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>topicId?: string</code></td>
      <td>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#topicId">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>type?: string</code></td>
      <td>
        <p>Restricts a searhc query to only return certain resources</p>
        <p><strong>Note:</strong> The value is of a comma-seperated list of resource types.</p>
        <p><strong>Default:</strong> <code>video,channel,playlist</code></p>
      </td>
    </tr>
    <tr>
      <td><code>videoCaption?: 'any' | 'closedcaption' | 'none'</code></td>
      <td>
        <p>Whether the API should filter video search results based on whether they have captions.</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoCaption">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoCategoryId?: string</code></td>
      <td>
        <p>Filters video search results based on their category</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoCategoryId">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoDefinition?: 'any' | 'high' | 'standard'</code></td>
      <td>
        <p>Restricts a search to only include either high definition/standard definition videos</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoDefinition">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoDimension?: 'any' | '2d' | '3d'</code></td>
      <td>
        <p>Restricts a search to only retrieve 2D or 3D videos</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoDimension">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoDuration?: 'any' | 'long' | 'medium' | 'short'</code></td>
      <td>
        <p>Filters video search results based on their duration</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoDuration">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoEmbeddable?: 'any' | 'true'</code></td>
      <td>
        <p>Restricts a search to only videos that can be embedded on a webpage</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoLicense?: 'any' | 'creativeCommon' | 'youtube'</code></td>
      <td>
        <p>Filters videos to only include videos with a particular license</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoLicense">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoSyndicated?: 'any' | 'true'</code></td>
      <td>
        <p>Whether to restrict a search to only videos that can be played outside of youtube.com</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated">API docs</a> for more info</p>
      </td>
    </tr>
    <tr>
      <td><code>videoType?: 'any' | 'episode' | 'movie'</code></td>
      <td>
        <p>Restrict a search to a particular type of videos</p>
        <p><strong>Note:</strong> The <code>type</code> parmaeter must be set to <code>video</code>.</p>
        <p>See the <a href="https://developers.google.com/youtube/v3/docs/search/list#videoType">API docs</a> for more info</p>
      </td>
    </tr>
  </tbody>
 </table>

### `NgxYtdApiSearchListResult`

The result of `NgxYtdApiSearchService#list`.
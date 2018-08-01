<!-- markdownlint-disable MD033 -->

<h1 align="center">ngx-ytd-api</h1>

<p align="center">An unofficial integration of the YouTube Data v3 API with Angular</p>

<div align="center">

<!-- Badges -->
[![ngx-ytd-api@latest](https://img.shields.io/npm/v/ngx-ytd-api.svg?style=flat-square)][package-url]
[![ngx-ytd-api@next](https://img.shields.io/npm/v/ngx-ytd-api/next.svg?style=flat-square)][package-url]
[![Build Status](https://img.shields.io/travis/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://travis-ci.org/Chan4077/ngx-ytd-api)
[![GitHub contributors](https://img.shields.io/github/contributors/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/graphs/contributors)
[![ngx-ytd-api license](https://img.shields.io/github/license/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/commits)
[![Greenkeeper badge](https://badges.greenkeeper.io/Chan4077/ngx-ytd-api.svg)](https://greenkeeper.io/)

<!-- END Badges -->

</div>

## Getting Started

### Prerequisites

Ensure that you have `npm` and `node` installed and that you have a basic Angular app setup.

Also ensure that your app is running at least Angular 6 before continuing.

### Installing

Run the following comamnd which should install the `latest` version (`1.0.0-alpha.3`):

```bash
npm install ngx-ytd-api --save
```

#### Next

To get the latest `next` tag, run the following command:

```bash
npm install ngx-ytd-api@next --save
```

#### Snapshot builds

Alternatively, you can get a snapshot build with the latest changes from `master`. Note that this snapshot build should not be considered stable and may break between releases.

```bash
npm install --save Chan4077/ngx-ytd-api-builds
```

## Features

### Available features

<table>
  <tbody>
    <tr>
      <th>Feature</th>
      <th>Notes</th>
      <th>Docs</th>
    </tr>
    <tr>
      <td>Comments</td>
      <td>
        <ul>
          <li>So far, only the minimal API to get a comment has been implemented.</li>
          <li>This should be released with the upcoming version.</li>
        </ul>
      </td>
      <td><em>No docs available</em></td>
    </tr>
    <tr>
      <td>Search</td>
      <td>
        <ul>
          <li>Most API features are available, apart from OAuth</li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://developers.google.com/youtube/v3/docs/search/list#parameters">API parameters</a></li>
          <li><a href="https://developers.google.com/youtube/v3/docs/search#resource-representation">Resource representation</a></li>
          <li><a href="https://developers.google.com/youtube/v3/docs/search#properties">Properties</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Videos</td>
      <td>
        <ul>
          <li>Only the method for getting info about a video has been implemented.</li>
          <li>The API is currently postponed due to the lack of time to continue.</li>
        </ul>
      </td>
      <td><em>No docs available</em></td>
  </tbody>
</table>

### In-progress / planned / non-planned features

Feature | Status | Issue
---|---|---
Activities | Not planned | -
Captions | Not planned | -
Channel banner / Channel sections / Channels | Not planned | -
Comment threads / Comments | In progress | [#6](https://github.com/Chan4077/ngx-ytd-api/issues/6)
Guide categories | Not planned | -
I18n | Not planned | -
Playlist items / Playlists | Not planned | -
Subscriptions | Not planned | -
Thumbnails | Not planned | -
Video abuse report reasons / Video categories | Not planned | -
Videos | In progress | [#9](https://github.com/Chan4077/ngx-ytd-api/issues/9)
Watermarks | Not planned | -

See the [developer docs](https://developers.google.com/youtube/v3/docs) for a list of all endpoints of the YouTube Data API.

[package-url]: https://npmjs.com/package/ngx-ytd-api

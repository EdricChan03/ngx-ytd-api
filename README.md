<!-- markdownlint-disable MD033 -->

<h1 align="center">ngx-ytd-api</h1>

<p align="center">An unofficial integration of the YouTube Data v3 API with Angular</p>

<div align="center">

<!-- Badges -->
[![ngx-ytd-api@latest](https://img.shields.io/npm/v/ngx-ytd-api.svg?style=flat-square)][package-url]
<!-- [![ngx-ytd-api@next](https://img.shields.io/npm/v/ngx-ytd-api/next.svg?style=flat-square)][package-url] -->
[![Build Status](https://img.shields.io/travis/com/EdricChan03/ngx-ytd-api.svg?style=flat-square)](https://travis-ci.com/Chan4077/ngx-ytd-api)
[![GitHub contributors](https://img.shields.io/github/contributors/EdricChan03/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/graphs/contributors)
[![ngx-ytd-api license](https://img.shields.io/github/license/EdricChan03/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/EdricChan03/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/commits)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=EdricChan03/ngx-ytd-api)](https://dependabot.com)
<!-- END Badges -->

</div>

## Getting Started

### Prerequisites

Ensure that you have `npm` and `node` installed and that you have a basic Angular app setup.

Also ensure that your app is running at least Angular 6 before continuing.

### Installing

Run the following comamnd which should install the latest version of `ngx-ytd-api` available:

```bash
npm install ngx-ytd-api --save
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
          <li>All API features are available (with OAuth support)</li>
          <li>However, more examples are needed.</li>
        </ul>
      </td>
      <td><em>No docs available</em></td>
    </tr>
    <tr>
      <td>Comment threads</td>
      <td>
        <ul>
          <li>All API features are available</li>
          <li>However, more examples are needed.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters">API parameters</a></li>
          <li><a href="https://developers.google.com/youtube/v3/docs/commentThreads#resource-representation">Resource representation</a></li>
          <li><a href="https://developers.google.com/youtube/v3/docs/commentThreads#properties">Properties</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Search</td>
      <td>
        <ul>
          <li>All API features are available (with OAuth support)</li>
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
          <li>All API features are available (with OAuth support)</li>
          <li>However, more examples are needed.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://developers.google.com/youtube/v3/docs/videos">Google Developer Documentation</a></li>
          <li><a href="https://developers.google.com/youtube/v3/docs/videos#resource-representation">Resource representation</a></li>
        </ul>
      </td>
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
Watermarks | Not planned | -

### Roadmap

Please see the [ROADMAP.md](/ROADMAP.md) file for the whole roadmap.

---

See the [developer docs](https://developers.google.com/youtube/v3/docs) for a list of all endpoints of the YouTube Data API.

[package-url]: https://npmjs.com/package/ngx-ytd-api

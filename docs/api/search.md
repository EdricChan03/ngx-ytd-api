# API for search
`import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';`

## Notes

> - :warning: This file may get huge. Consider using the _Find_ command on your browser/code editor to find the method/interface you're looking for.
> - :warning: Since the library is in **alpha**, some of the APIs you see below may change or get removed entirely. Please check back to this page weekly.

<sub>_Updated as of `1.0.0-alpha.1`_</sub>

---

## Docs
See the [readme for search](../../src/lib/search/README.md) to view the docs.

---

## Methods

### `NgxYtdApiService#search` <sub><sup>DEPRECATED</sup></sub>

#### Description
Searches for content such as channels, videos and livestream broadcasts.

#### Parameters
Name | Description | Notes
---|---|---
`query: string` | The query to search for | -
`opts: NgxYtdApiSerchOpts` | Options for the API | See [NgxYtdApiSearchOpts](#ngxytdapisearchopts) for all properties

#### Returns
`Observable<NgxYtdApiSearchResult>`: Results of the search as a stream

#### Notes
This is deprecated (will be removed in the beta). Consider using [`NgxYtdApiService#searchVideos`](#ngxytdapiservicesearchvideos) instead.

### `NgxYtdApiService#searchVideos`

#### Description
Searches for content such as channels, videos and livestream broadcasts.

#### Parameters
Name | Description | Notes
---|---|---
`query: string` | The query to search for | -
`opts: NgxYtdApiSerchOpts` | Options for the API | See [NgxYtdApiSearchOpts](#ngxytdapisearchopts) for all properties

#### Returns
`Observable<NgxYtdApiSearchResult>`: Results of the search as a stream

---

## Interfaces

### `NgxYtdApiSearchOpts`

#### Description

### `NgxYtdApiVideoSearchOpts`

#### Description

### `NgxYtdApiSearchResult`

#### Description

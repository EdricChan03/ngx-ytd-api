<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4 dalmatian-peony](https://github.com/Chan4077/ngx-ytd-api/compare/1.0.0-alpha.4...1.0.0-alpha.3) (2018-12-31)

### Highlights

After at least 6 months of no releases, this one comes out of nowhere! And on the last day of 2018 as well! :tada:

This release adds the following features:

* Library
  * Support for video and comment YouTube Data APIs!
  * Support for Angular v7!
  * Support for OAuth!
  * Support for [standard query parameters](https://developers.google.com/youtube/v3/docs/standard_parameters)!
* Demo
  * General improvement of demos
    * New video picker!
    * Initial privacy policy!
* And a huge number of bug fixes!

### Bug Fixes

* **demo:** add missing `printDocument` method ([90dfe4c](https://github.com/Chan4077/ngx-ytd-api/commit/90dfe4c))
* **demo:** fix linting errors ([ce9576a](https://github.com/Chan4077/ngx-ytd-api/commit/ce9576a))
* **demo:** remove additional closed curly brackets ([fc2b5b3](https://github.com/Chan4077/ngx-ytd-api/commit/fc2b5b3))
* **demo:** use template literal to prevent from hardcoding of redirect URI ([819cf54](https://github.com/Chan4077/ngx-ytd-api/commit/819cf54))
* **demo/privacy-policy:** hide tooltip when printing ([d082298](https://github.com/Chan4077/ngx-ytd-api/commit/d082298))
* **demo/search:** set search results to `null` once reset ([dbd1d71](https://github.com/Chan4077/ngx-ytd-api/commit/dbd1d71))
* **demo/search/list:** add missing `part` parameter ([c4d75b5](https://github.com/Chan4077/ngx-ytd-api/commit/c4d75b5))
* **demo/search/list:** API link for API key not working ([35046d3](https://github.com/Chan4077/ngx-ytd-api/commit/35046d3))
* **demo/search/list:** encode search form values ([f115835](https://github.com/Chan4077/ngx-ytd-api/commit/f115835))
* **demo/SharedService:** check if the app is running on Firebase ([f188c67](https://github.com/Chan4077/ngx-ytd-api/commit/f188c67))
* **demo/SharedService:** remove commented method ([a01be8d](https://github.com/Chan4077/ngx-ytd-api/commit/a01be8d))
* **demo/version-picker:** use main entrypoint of ngx-ytd-api ([d051cbb](https://github.com/Chan4077/ngx-ytd-api/commit/d051cbb))
* **demo/yt-video-picker:** use `display` CSS property instead of `*ngIf` ([0636ef1](https://github.com/Chan4077/ngx-ytd-api/commit/0636ef1))
* **lib:** add check to prevent duplication of query parameters ([32ef545](https://github.com/Chan4077/ngx-ytd-api/commit/32ef545))
* **lib/comments:** broken links to YouTube's API docs ([238eef2](https://github.com/Chan4077/ngx-ytd-api/commit/238eef2))
* **lib/core:** correct API endpoint of `ngxYtdCommentsApiUrl` ([48553fa](https://github.com/Chan4077/ngx-ytd-api/commit/48553fa))
* **lib/core:** missing `package.json` ([91abf4a](https://github.com/Chan4077/ngx-ytd-api/commit/91abf4a))
* **lib/core:** remove `private` tag ([549fc43](https://github.com/Chan4077/ngx-ytd-api/commit/549fc43))
* **lib/search:** add missing semicolon ([f4ede33](https://github.com/Chan4077/ngx-ytd-api/commit/f4ede33))
* **lib/search:** rename `pagingInfo` to `pageInfo` ([5372867](https://github.com/Chan4077/ngx-ytd-api/commit/5372867))
* **lib/search/list:** add missing type parameter ([4b7ce37](https://github.com/Chan4077/ngx-ytd-api/commit/4b7ce37))
* **lib/video:** correct interface ([9993f44](https://github.com/Chan4077/ngx-ytd-api/commit/9993f44))
* **lib/videos/list:** rename `privacyPolicy` parameter to `privacyStatus` ([7a8f1fc](https://github.com/Chan4077/ngx-ytd-api/commit/7a8f1fc))
* **tests:** use correct API key ([8d27e37](https://github.com/Chan4077/ngx-ytd-api/commit/8d27e37))

### Features

* **core:** introduce more HTTP request methods ([72220c1](https://github.com/Chan4077/ngx-ytd-api/commit/72220c1))
* **demo:** initial implementation of YouTube video picker ([1c9082e](https://github.com/Chan4077/ngx-ytd-api/commit/1c9082e))
* **demo:** initial privacy policy ([6ab0d71](https://github.com/Chan4077/ngx-ytd-api/commit/6ab0d71))
* **demo:** support for dark theme ([0a3514d](https://github.com/Chan4077/ngx-ytd-api/commit/0a3514d))
* **demo/privacy-policy:** add printing support ([7297648](https://github.com/Chan4077/ngx-ytd-api/commit/7297648))
* **demo/search:** add links for each parameter to YouTube Data v3 Search API docs ([3219e81](https://github.com/Chan4077/ngx-ytd-api/commit/3219e81))
* **demo/search/list:** add support for query parameters for search form ([eb86237](https://github.com/Chan4077/ngx-ytd-api/commit/eb86237))
* **demo/videos:** add initial demo for `NgxYtdApiVideosService#list` method ([c15f2f9](https://github.com/Chan4077/ngx-ytd-api/commit/c15f2f9))
* **demo/videos/getRating:** initial demo page ([cc23dcb](https://github.com/Chan4077/ngx-ytd-api/commit/cc23dcb))
* **lib:** add initial video API ([9118813](https://github.com/Chan4077/ngx-ytd-api/commit/9118813))
* support Angular v7 ([2ea90ba](https://github.com/Chan4077/ngx-ytd-api/commit/2ea90ba))
* **lib:** add support for standard query parameters ([c7d75b7](https://github.com/Chan4077/ngx-ytd-api/commit/c7d75b7)), closes [#31](https://github.com/Chan4077/ngx-ytd-api/issues/31)
* **lib:** introduce comment API ([b2aff75](https://github.com/Chan4077/ngx-ytd-api/commit/b2aff75))
* **lib/comments:** support all methods (`delete`, `insert`, `markAsSpam`, `setModerationStatus` and `update`) ([03d8ddb](https://github.com/Chan4077/ngx-ytd-api/commit/03d8ddb)), closes [#6](https://github.com/Chan4077/ngx-ytd-api/issues/6)
* **lib/core:** add support for 2 type parameters ([fa4a1e0](https://github.com/Chan4077/ngx-ytd-api/commit/fa4a1e0))
* **lib/core:** add support for type parameter for a HTTP request body ([3348fb6](https://github.com/Chan4077/ngx-ytd-api/commit/3348fb6))
* **lib/search:** add support for OAuth ([bf548ae](https://github.com/Chan4077/ngx-ytd-api/commit/bf548ae)), closes [#18](https://github.com/Chan4077/ngx-ytd-api/issues/18)
* **lib/videos:** add support for OAuth ([1d0f394](https://github.com/Chan4077/ngx-ytd-api/commit/1d0f394)), closes [#18](https://github.com/Chan4077/ngx-ytd-api/issues/18)
* **lib/videos:** implement all methods (`delete`, `insert`, `rate`, `reportAbuse` & `update`) ([37d216c](https://github.com/Chan4077/ngx-ytd-api/commit/37d216c)), closes [#9](https://github.com/Chan4077/ngx-ytd-api/issues/9)
* **travis:** use build stages ([2fdde02](https://github.com/Chan4077/ngx-ytd-api/commit/2fdde02))


### Reverts

* chore(lib): use placeholder version ([9a71500](https://github.com/Chan4077/ngx-ytd-api/commit/9a71500))


### BREAKING CHANGES

* **lib/comments:** All interfaces in the `comments` module have been renamed to their plural forms to be more consistent with the docs. Below is a migration table:

  Old | New
  ---|---
  `NgxYtdApiCommentListOpts` | `NgxYtdApiCommentsListOpts`
  `NgxYtdApiCommentListResult` | `NgxYtdApiCommentsListResult`
  `NgxYtdApiCommentListResultItem` | `NgxYtdApiCommentsListResultItem`
  `NgxYtdApiCommentResource` | `NgxYtdApiCommentsResource`
* **lib/comments:** `NgxYtdApiCommentService` has been renamed to `NgxYtdApiCommentsService` due to an inconsistency between other submodules and the Comments submodule.
* **lib/search:** Due to a typo error, `pagingInfo` has been renamed to `pageInfo` in the `NgxYtdApiSearchListResult` interface.
* **lib/core:** `NgxYtdApiCoreService#_generateApiRequest` has been renamed to `NgxYtdApiCoreService#createHttpGet`.
* **lib/core:** - `NgxYtdApiCoreService#_generateApiRequest` now requires either 2 type parameters or 0 type parameters. The first type parameter is the type of the result returned as an `Observable`. The second type parameter is used for the type of the second parameter (`apiParams`).
* **lib/search:** The `query` parameter of `NgxYtdApiSearch#list` has been removed to align this API to YouTube's Data v3 Search API. Please use the `q` option in `NgxYtdApiSearchListOpts` instead. Here's an example:

  ```diff
  - this.ytdApiSearch.list('despacito', { apiKey: '<your-api-key>' });
  + this.ytdApiSearch.list({ apiKey: '<your-api-key>', q: 'despacito' });
  ```
* **lib/search:** `NgxYtdApiSearch#search` has been removed in favour of `NgxYtdApiSearch#list` for aligning with YouTube Data v3 Search API.
* The library now internally uses the `ngx-simple-http`. This is a **required** dependency and must be installed separately with it.

<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3 greyhound-puma](https://github.com/Chan4077/ngx-ytd-api/compare/1.0.0-alpha.3...1.0.0-alpha.2) (2018-06-19)


### Bug Fixes

* **demo:** update card styles ([70bcccb](https://github.com/Chan4077/ngx-ytd-api/commit/70bcccb))
* **lib:** change `apiKey` to `key` ([985595b](https://github.com/Chan4077/ngx-ytd-api/commit/985595b))
* **lib:** correct dest path for `ng-packagr` ([aac1cb2](https://github.com/Chan4077/ngx-ytd-api/commit/aac1cb2))


### Features

* **lib:** add `videoDimension` property ([e888586](https://github.com/Chan4077/ngx-ytd-api/commit/e888586))
* **lib/search:** add new options for config ([383dfcc](https://github.com/Chan4077/ngx-ytd-api/commit/383dfcc))


### BREAKING CHANGES

* **lib:** `NgxYtdApiGenericOpts#apiKey` has been renamed to `NgxYtdApiGenericOpts#key` for convenience with the YouTube Data v3 API.

* **lib/search:** `NgxYtdApiService#searchVideos` has been removed in favour of `NgxYtdApiService#search` as the former is the same, except that the `type` parameter would be set as `video`. For those who want to filter videos, pass in the `type` parameter set to `video` as the configuration to only search videos. See `NgxYtdApiSearchOpts#type` for more info.



<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2 capybara-spaniel](https://github.com/Chan4077/ngx-ytd-api/releases/tag/1.0.0-alpha.2) (2018-06-07)

### Highlights
- New API docs! This can be accessible by visiting the `docs` directory at the root of this project, as well as the individual `README.md` in every module.
- New version picker on the demo site! You can see it on the top right of the site at <https://ngx-ytd-api.firebaseapp.com>.

### Bug Fixes

* **angular-cli:** correct assets input ([07e3e6c](https://github.com/Chan4077/ngx-ytd-api/commit/07e3e6c))
* **angular-workspace:** add path option for demo ([298280b](https://github.com/Chan4077/ngx-ytd-api/commit/298280b))
* **demo:** add missing semicolon ([972cfd4](https://github.com/Chan4077/ngx-ytd-api/commit/972cfd4))
* **demo:** remove `rootDir` property from tsconfig ([5b1970c](https://github.com/Chan4077/ngx-ytd-api/commit/5b1970c))
* **demo/SharedService:** add missing newline ([2d57c5a](https://github.com/Chan4077/ngx-ytd-api/commit/2d57c5a))
* **demo/version-picker:** correct usage of ngSwitch ([5c66341](https://github.com/Chan4077/ngx-ytd-api/commit/5c66341))
* **demo/version-picker:** remove method for handling menu item clicks ([b35a210](https://github.com/Chan4077/ngx-ytd-api/commit/b35a210))
* **demo/version-picker:** remove unclosed tag ([38a7d16](https://github.com/Chan4077/ngx-ytd-api/commit/38a7d16))
* **demo/version-picker:** use `href` instead of `routerLink` ([fc009a0](https://github.com/Chan4077/ngx-ytd-api/commit/fc009a0))
* **firebase-hosting:** add `rewrite` rules ([aa1d2c0](https://github.com/Chan4077/ngx-ytd-api/commit/aa1d2c0))
* **firebase-hosting:** add missing comma ([4e5c02f](https://github.com/Chan4077/ngx-ytd-api/commit/4e5c02f))
* **lib:** add missing newline from `public_api` ([c4a7cd4](https://github.com/Chan4077/ngx-ytd-api/commit/c4a7cd4))
* **lib:** update version ([6f48452](https://github.com/Chan4077/ngx-ytd-api/commit/6f48452))
* **lib:** update YouTube Data API key ([189145c](https://github.com/Chan4077/ngx-ytd-api/commit/189145c))
* **travis:** add flag for skipping cleanup when deploying ([45e1cf3](https://github.com/Chan4077/ngx-ytd-api/commit/45e1cf3))
* **travis:** add OS-specific code ([86d2f26](https://github.com/Chan4077/ngx-ytd-api/commit/86d2f26))
* **travis:** append `./` ([a3e51f9](https://github.com/Chan4077/ngx-ytd-api/commit/a3e51f9))
* **travis:** append `scripts` ([46b18e4](https://github.com/Chan4077/ngx-ytd-api/commit/46b18e4))
* **travis:** commit all files of demo folder ([aec5709](https://github.com/Chan4077/ngx-ytd-api/commit/aec5709))
* **travis:** correct escape sequence ([a2ea31b](https://github.com/Chan4077/ngx-ytd-api/commit/a2ea31b))
* **travis:** deploy docs only if commit has a tag ([c6e263c](https://github.com/Chan4077/ngx-ytd-api/commit/c6e263c))
* **travis:** don't run function in subprocess ([6b30348](https://github.com/Chan4077/ngx-ytd-api/commit/6b30348))
* **travis:** surround string with quotes ([15d019a](https://github.com/Chan4077/ngx-ytd-api/commit/15d019a))
* **travis:** use `-n` instead of `-v` ([4fd2051](https://github.com/Chan4077/ngx-ytd-api/commit/4fd2051))
* **travis:** use `-n` instead of `-z` ([557531c](https://github.com/Chan4077/ngx-ytd-api/commit/557531c))
* **travis:** use `-v` instead of `-n` ([e6d6a73](https://github.com/Chan4077/ngx-ytd-api/commit/e6d6a73))


### Features

* add codeowners ([a983c3d](https://github.com/Chan4077/ngx-ytd-api/commit/a983c3d))
* **demo:** add versions JSON file ([db1ae34](https://github.com/Chan4077/ngx-ytd-api/commit/db1ae34))
* **demo:** automatically deploy to firebase ([7b032c6](https://github.com/Chan4077/ngx-ytd-api/commit/7b032c6))
* **travis:** add script for generating docs ([5510204](https://github.com/Chan4077/ngx-ytd-api/commit/5510204))



# 1.0.0-alpha.1 saiga-poppy
- Placeholder text

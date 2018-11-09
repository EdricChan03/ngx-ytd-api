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

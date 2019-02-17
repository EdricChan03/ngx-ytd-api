# Getting started

For help getting started with a new Angular app, check out the [Angular CLI](https://cli.angular.io).

For existing apps, follow the steps bellow to begin using `ngx-ytd-api`!

## Step 1. Configuring an app to enable YouTube Data API

Follow [these steps](https://developers.google.com/youtube/v3/getting-started#before-you-start) to setup an app to use the YouTube Data API. Once you're done, head back here.

## Step 2. Install the library

Install the latest version (`1.0.0-alpha.4`) by running this command:

### NPM v5 and above

```bash
npm i ngx-ytd-api
```

### NPM v4 and below

```bash
npm i --save ngx-ytd-api
```

### Alternative: Snapshot builds

Alternatively, you can install snapshot builds which are built for every commit and published to `https://github.com/Chan4077/ngx-ytd-api-builds`. Take note that these builds may be experimental and may break your app.

#### NPM v5 and above

```bash
npm i Chan4077/ngx-ytd-api-builds
```

#### NPM v4 and below

```bash
npm i --save Chan4077/ngx-ytd-api-builds
```

## Step 3. Setting the API key

To set the API key for the YouTube Data v3 API, you can either:

1. Specify the API key via the `key` parameter of an API.

    Here's an example:

    ```typescript
    import { NgxYtdApiSearchService, NgxYtdApiSearchListResult } from 'ngx-ytd-api/search';
    @Component({ /* ... */ })
    export class AppComponent {
      constructor(private ytdSearchApi: NgxYtdApiSearchService) { }
      search(q: string): Observable<NgxYtdApiSearchListResult> {
        return this.ytdSearchApi.list({ key: '<your-api-key>', q: q, /* ... */ });
      }
    }
    ```

2. Specify the API key via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token.

    Example:

    ```typescript
    import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from 'ngx-ytd-api/common';
    @NgModule({
      /* ... */
      providers: [
        {
          provide: NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,
          useValue: {
            key: '<your-api-key>'
          }
        }
      ]
    })
    export class AppModule { }
    ```

That's it! For documentation on a submodule, see the individual `README.md` in the specified submodule.

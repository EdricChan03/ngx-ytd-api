# Search module

The `ngx-ytd-api`'s Search module implements searching using the YouTube Data API and returns results.

## Using the search module

To use the search module, follow these steps:

1. Since `ngx-ytd-api` has a peer dependency on `@angular/common/http`, ensure that you've installed the `@angular/common` dependency in your app. You can verify this by typing `ng -v` in your command line which should output all versions of Angular in the project.

	Here's an example output:
	```
		_                      _                 ____ _     ___
	   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
	 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
					|___/
	Angular CLI: 6.0.8
	Node: 10.5.0
	OS: darwin x64
	Angular: 6.0.4
	... animations, common, compiler, compiler-cli, core, forms
	... language-service, platform-browser, platform-browser-dynamic
	... router

	Package                            Version
	------------------------------------------------------------
	@angular-devkit/architect          0.6.8
	@angular-devkit/build-angular      0.6.8
	@angular-devkit/build-ng-packagr   0.6.8
	@angular-devkit/build-optimizer    0.6.8
	@angular-devkit/core               0.6.8
	@angular-devkit/schematics         0.6.8
	@angular/cdk                       6.2.1
	@angular/cli                       6.0.8
	@angular/common                    6.0.8
	@angular/flex-layout               6.0.0-beta.16
	@angular/material                  6.2.1
	@ngtools/json-schema               1.1.0
	@ngtools/webpack                   6.0.8
	@schematics/angular                0.6.8
	@schematics/update                 0.6.8
	ng-packagr                         3.0.2
	rxjs                               6.2.1
	typescript                         2.7.2
	webpack                            4.8.3
	```
2. Ensure that you've created a project in Google Cloud Console & generated an API key for your app. See _[Registering an app > Create API Keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)_ & _[Getting Started > Before you start](https://developers.google.com/youtube/v3/getting-started#before-you-start)_ for more info.
3. Import `NgxYtdApiSearchService` from `ngx-ytd-api/search` into your app's main module:
   
    ```typescript
    import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';
    import { NgModule } from '@angular/core';

    // ...

    @NgModule({
	    providers: [
			NgxYtdApiSearchService
		]
    })
    export class AppModule { }
    ```
4. That's it! You're done! You can then use this service in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

## Examples

Here's a list of examples that you can copy and paste into your app:

### Searching for videos, channels & playlists with safe search enabled

```typescript
import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';

@Component({
	template: `
	<input [(ngModel)]="query" placeholder="Query">
	<button (click)="search()">Search</button>
	<pre><code id="result"></code></pre>
	`
})
export class MyAppComponent {
	constructor(private ytdApi: NgxYtdApiSearchService) { }
	query: string = '';
	search() {
		// Note: Replace 'your-youtube-api-key' with the API key that you've retrieved from the Cloud Console
		this.ytdApi.search(this.query, { key: 'your-youtube-api-key', type: 'video,channel,playlist', safeSearch: 'strict' }).subscribe(result => {
			console.log(`Result: ${JSON.stringify(result.items)}`);
			document.getElementById('result').innerText = result;
		})
	}
}
```

### Searching for videos only

```typescript
import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';

@Component({
	template: `
	<button (click)="searchVideos()">👏 meme review 👏</button>
	<pre><code id="result"></code></pre>
	`
})
export class MyAppComponent {
	constructor(private ytdApi: NgxYtdApiSearchService) { }
	searchVideos() {
		// Note: Replace 'your-youtube-api-key' with the API key that you've retrieved from the Cloud Console
		this.ytdApi.search('meme review', { key: 'your-youtube-api-key', type: 'video' }).subscribe(result => {
			console.log(`Result: ${JSON.stringify(result.items)}`);
			document.getElementById('result').innerText = result;
		})
	}
}
```

### YouTube-like search

See the [full demo](https://ngx-ytd-api.firebaseapp.com/master/demos/search). The code is available at `./src/demo/demos/demo-search/*`.

---

## API Documentation

See the [API docs](../../../docs/api/search.md) for a full list of stuff you can do.

## Resources

- [Search API - Response](https://developers.google.com/youtube/v3/docs/search/list#properties)
- [Search API - Response > `items`](https://developers.google.com/youtube/v3/docs/search#resource)
- [YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started)
- [API docs for `ngx-ytd-api/search`](../../../docs/api/search.md)
The `ngx-ytd-api`'s Search module implements searching using the YouTube Data API and returns results.

## Using the search module
To use the search module, follow these steps:

1. Since `ngx-ytd-api` has a peer dependency on `@angular/common/http`, ensure that you've installed `@angular/common` in your app. You can verify this by typing `ng -v` in your command line which should output all versions of Angular in the project.
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
Here's a list of examples that you can use:

### Searching for videos

```typescript
import { NgxYtdApiSearchService } from 'ngx-ytd-api/search';

@Component({
	template: `
	<button (click)="searchVideos()" title="Click me to see some lovely meme reviews :)">👏 meme review 👏</button>
	<pre><code id="result"></code></pre>
	`
})
export class MyAppComponent {
	constructor(private ytdApi: NgxYtdApiSearchService) { }
	searchVideos() {
		// Note: Please replace 'your-youtube-api-key' with the API key that you've retrieved from the Cloud Console
		this.ytdApi.searchVideos({ apiKey: 'your-youtube-api-key', query: 'meme review' }).subscribe(result => {
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
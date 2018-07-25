# Getting started

For help getting started with a new Angular app, check out the [Angular CLI](https://cli.angular.io).

For existing apps, follow the steps bellow to begin using `ngx-ytd-api`!

## Step 1. Configuring an app to enable YouTube Data API

Follow [these steps](https://developers.google.com/youtube/v3/getting-started#before-you-start) to setup an app to use the YouTube Data API. Once you're done, head back here.

## Step 2. Install `ngx-ytd-api`

Install the latest version (`1.0.0-alpha.0`) by running this command:

```bash
npm install ngx-ytd-api --save
```

### Alternative: Daily build

Alternatively, you can install the `next` feature branch which will be published daily. Take note that these builds may be experimental and may break your app.

```bash
npm install ngx-ytd-api@next --save
```

## Step 3. Including the service in your app

Import the service in your app's module in the `providers` array of `NgModule`:

`app.module.ts`

```typescript
import { NgxYtdApiService } from 'ngx-ytd-api';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    NgxYtdApiService
  ]
})
export class AppModule { }
```

That's it! For documentation on a submodule, see the individual `README.md` in the specified submodule.

# Videos module

The `ngx-ytd-api`'s videos module implements the accessing of a particular video and returns information about the video, as well as other functionalities.

## Implementing the videos module into your app

### `1.0.0-alpha.4` and above

Note: Since `1.0.0-alpha.4`, this process has been simplified to only require you to import one module in order to integrate it.

1. Ensure that you've created a project in Google Cloud Console & generated an API key for your app. See _[Registering an app > Create API Keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)_ & _[Getting Started > Before you start](https://developers.google.com/youtube/v3/getting-started#before-you-start)_ for more info.
2. Import `NgxYtdApiVideosModule` from `ngx-ytd-api/videos` into your app's module:

    ```typescript
    import { NgxYtdApiVideosModule } from 'ngx-ytd-api/videos';
    import { NgModule } from '@angular/core';

    // ...

    @NgModule({
      imports: [
        NgxYtdApiVideosModule
      ]
    })
    export class AppModule { }
    ```
3. That's it! You're done! You can then use this service in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

### `1.0.0-alpha.3` and below

#### Pre-requisites

1. Please make sure that you've already set up an Angular app (ideally created with Angular CLI).
2. Ensure that you've imported the `HttpClientModule` in your app's main module (as seen below:)

    ```typescript
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    // ...

    @NgModule({
      imports: [
        // ...
        HttpClientModule
      ]
    })
    export class AppModule { }
    ```

---

#### Instructions

1. Import `NgxYtdApiVideosService` from `ngx-ytd-api/videos` into your app's main module by declaring it in the `providers` array of `NgModule`:

    ```typescript
    import { NgxYtdApiVideosService } from 'ngx-ytd-api/videos';
    import { NgModule } from '@angular/core';
    // ...

    @NgModule({
      providers: [
          NgxYtdApiVideosService
      ]
    })
    export class AppModule
    ```
2. That's it! This service can then be used in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

---
<!-- TODO(Edric): Uncomment the following lines once I've come up with typical use-cases -->
<!-- ## Examples

Here's a list of typical use-cases that you can copy and paste into your app:

_COMING SOON_ -->

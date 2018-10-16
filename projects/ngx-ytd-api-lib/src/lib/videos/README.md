# Videos module

The `ngx-ytd-api`'s videos module implements the accessing of a particular video and returns information about the video.

## Using the video module

### Pre-requisites

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

### Instructions

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

## Examples

Here's a list of typical use-cases that you can copy and paste into your app:

_COMING SOON_

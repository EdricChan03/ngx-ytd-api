# Comments module

The `ngx-ytd-api`'s comments module implements the accessing of comments and other useful utilities.

## Implementing the comments module into your app

### `1.0.0-alpha.3` and above

Note: Since `1.0.0-alpha.3`, this process has been simplified to only require you to import one module in order to integrate it.

1. Ensure that you've created a project in Google Cloud Console & generated an API key for your app. See _[Registering an app > Create API Keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)_ & _[Getting Started > Before you start](https://developers.google.com/youtube/v3/getting-started#before-you-start)_ for more info.
2. Import `NgxYtdApiCommentsModule` from `ngx-ytd-api/comments` into your app's module:

    ```typescript
    import { NgxYtdApiCommentsModule } from 'ngx-ytd-api/comments';
    import { NgModule } from '@angular/core';

    // ...

    @NgModule({
      imports: [
        NgxYtdApiCommentsModule
      ]
    })
    export class AppModule { }
    ```
3. That's it! You're done! You can then use this service in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

### `1.0.0-alpha.2` and below

1. Since `ngx-ytd-api` has a peer dependency on `@angular/common/http`, ensure that you've installed the `@angular/common` dependency in your app. You can verify this by typing `ng -v` in your command line which should output all versions of Angular in the project.
2. Ensure that you've created a project in Google Cloud Console & generated an API key for your app. See _[Registering an app > Create API Keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)_ & _[Getting Started > Before you start](https://developers.google.com/youtube/v3/getting-started#before-you-start)_ for more info.
3. Import `NgxYtdApiCommentsService` from `ngx-ytd-api/comments` into your app's main module:

    ```typescript
    import { NgxYtdApiCommentsService } from 'ngx-ytd-api/comments';
    import { NgModule } from '@angular/core';

    // ...

    @NgModule({
      providers: [
        NgxYtdApiCommentsService
      ]
    })
    export class AppModule { }
    ```
4. That's it! You're done! You can then use this service in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

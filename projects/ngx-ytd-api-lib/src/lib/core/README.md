# Core module

This module is used for the core functions that all of the other modules use and contains the version of the library.

## Implementing the module

Note: This module is meant to be used internally throughout the library and is not intended for other apps.

To use this service for the purposes of other services, follow the instructions below:

1. Import `NgxYtdApiCoreModule` from `ngx-ytd-api/core` into the component's module (see the below example).

    ```typescript
    import { NgxYtdApiCoreModule } from 'ngx-ytd-api/core';
    import { NgModule } from '@angular/core';

    // ...

    @NgModule({
      imports: [
        NgxYtdApiCoreModule
      ]
    })
    export class NgxYtdApiCommentsModule { }
    ```
2. That's it! You're done! You can then use this service in your app by injecting the service. (See the [Angular docs](https://angular.io/guide/architecture-services) for more info.)

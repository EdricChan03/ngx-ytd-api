import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';
@Injectable()
export class SharedService {
  constructor(
    /**
     * An instance of the Material snackbar component
     */
    public snackbar: MatSnackBar
  ) { }
  private _sidenav: MatSidenav;
  /**
   * A sidenav to set
   */
  set sidenav(sidenavVar: MatSidenav) {
    this._sidenav = sidenavVar;
  }
  /**
   * Getter to retrieve sidenav
   */
  get sidenav(): MatSidenav {
    return this._sidenav;
  }
  /**
   * Checks whether the app is deployed in production mode
   */
  get isProd(): boolean {
    return environment.production;
  }
  /**
   * Checks whether the user is online
   */
  get isOnline(): boolean {
    return navigator.onLine;
  }
  /**
   * Retrieves the OAuth 2.0 access token saved in local storage.
   */
  get oAuthAccessToken(): string {
    return localStorage.getItem('oauth-token');
  }
  /**
   * Opens a developer config dialog
   * @deprecated
   */
  openDevConfig() {
    console.warn('This method has been deprecated! Please do not use!');
  }
  /**
   * Retrieves a property from local storage
   * @param property The property to access
   * @return The value of the property, or `null` if the property doesn't exist.
   */
  getLocalStorageProperty(property: string) {
    if (localStorage.getItem(property)) {
      return localStorage.getItem(property);
    }
    return;
  }
  /**
   * Shortcut method to print the current document
   */
  printDocument() {
    window.print();
  }
  /**
   * Retrieves a fragment's value.
   * Useful for OAuth 2.0.
   * @param name The fragment name to search for
   */
  getFragmentValue(name: string): string {
    const regex = new RegExp(`^.*${name}=([^&]+).*$`);
    return window.location.hash.replace(regex, '$1');
  }
  /**
   * Copies text to the clipboard.
   * @param text The text to copy
   */
  copyText(text: string) {
    try {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = text;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.snackbar.open('Link copied to clipboard');
    } catch (e) {
      // TODO(Edric): Implement catch statement for when the browser can't handle this.
      console.error('An error occurred while copying:', e);
    }
  }
  /**
   * Adds query string(s) to the url
   * @param url The URL to add the query strings to
   * @param queryString The query strings to add to the URL
   */
  addQueryString(url: string, queryString: string) {
    const isQuestionMarkPresent = url && url.indexOf('?') !== -1;
    let separator = '';

    if (queryString) {
      separator = isQuestionMarkPresent ? '&' : '?';
      url += separator + queryString;
    }

    return url;
  }
  /**
   * Signs in a user by opening a new window
   * @param returnAsObj Whether to return the result as a config for all properties
   * @param scope The scope to access
   * @param clientId The client ID which can be accessed from the Google Developer console.
   * @return An instance of the window
   */
  oAuthSignInWindow(
    scope = 'https://www.googleapis.com/auth/userinfo.email',
    clientId = '96941029893-421qi0p79ccsdo5fck9jqkcmflcpa2uu.apps.googleusercontent.com'
  ): Window {
    let oAuthEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    let redirectUri: string;
    // Since the demo has multiple versions, check if the app is running on Firebase.
    if (window.location.host === 'ngx-ytd-api.firebaseapp.com') {
      // Get the version and paste it in the URI below
      redirectUri = `${window.location.origin}/${window.location.pathname.split('/')[1]}/callback`;
    } else {
      // Assume that the app is running locally.
      redirectUri = `${window.location.origin}/callback`;
    }
    oAuthEndpoint = this.addQueryString(oAuthEndpoint, `client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}\
    &include_granted_scopes=true&response_type=token`);
    return window.open(oAuthEndpoint, 'OAuthWindow', 'width=420,height=600,resizeable,scrollbars,status');
  }
  /**
   * Create form to request access token from Google's OAuth 2.0 server.
   * @param target The target to open the form in.
   * @param scope The scope to access
   * @param clientId The client ID. This can be accessed from Google's Developer Console.
   * @param redirectUri The URL to redirect to after authenticating.
   */
  oAuthSignIn(
    target = '_self',
    scope = 'https://www.googleapis.com/auth/userinfo.email',
    clientId = '96941029893-421qi0p79ccsdo5fck9jqkcmflcpa2uu.apps.googleusercontent.com'
    // redirectUri = `${window.location.origin}/callback`
  ) {
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oAuthEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    let redirectUri: string;
    // Since the demo has multiple versions, check if the app is running on Firebase.
    if (window.location.host === 'ngx-ytd-api.firebaseapp.com') {
      // Get the version and paste it in the URI below
      redirectUri = `${window.location.origin}/${window.location.pathname.split('/')[1]}/callback`;
    } else {
      // Assume that the app is running locally.
      redirectUri = `${window.location.origin}/callback`;
    }
    // Create element to open OAuth 2.0 endpoint in new window.
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oAuthEndpoint);
    form.setAttribute('target', target);
    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
      'client_id': clientId,
      'redirect_uri': redirectUri,
      'scope': scope,
      'include_granted_scopes': 'true',
      'response_type': 'token'
    };

    // Add form parameters as hidden input values.
    for (const p in params) {
      if (p in params) {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }
  /**
   * Removes duplicates from an array
   * @param a The array
   * @return A unique array
   */
  removeDuplicates<P = {}>(a: P[]): P[] {
    return Array.from(new Set(a));
  }
}

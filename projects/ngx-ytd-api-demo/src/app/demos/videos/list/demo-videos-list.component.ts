import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { NgxYtdApiVideosService } from 'ngx-ytd-api/videos';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo-videos-list',
  templateUrl: './demo-videos-list.component.html',
  styleUrls: ['./demo-videos-list.component.css']
})
export class DemoVideosListComponent {
  videosForm: FormGroup;
  authMethod: FormControl;
  videosListResult: any;
  errorResult: any;
  constructor(
    public shared: SharedService,
    private ytApi: NgxYtdApiVideosService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.videosForm = fb.group({
      id: ['', Validators.required],
      key: ['', Validators.required],
      accessToken: [{ value: '', disabled: true }, Validators.required],
      chart: '',
      myRating: '',
      hl: '',
      maxHeight: null,
      maxResults: 5,
      maxWidth: null,
      onBehalfOfContentOwner: '',
      pageToken: '',
      regionCode: '',
      videoCategoryById: ''
    });
    this.videosForm.get('accessToken')
        .statusChanges
        .subscribe(result => {
          if (result === 'INVALID') {
            if (this.videosForm.get('myRating').enabled) {
              this.videosForm.get('myRating').disable();
            }
            if (this.videosForm.get('onBehalfOfContentOwner').enabled) {
              this.videosForm.get('onBehalfOfContentOwner').disable();
            }
          } else if (result === 'VALID') {
            if (this.videosForm.get('myRating').disabled) {
              this.videosForm.get('myRating').enable();
            }
            if (this.videosForm.get('onBehalfOfContentOwner').disabled) {
              this.videosForm.get('onBehalfOfContentOwner').enable();
            }
          }
        });
    this.authMethod = new FormControl('key');
    this.authMethod.valueChanges.subscribe(result => {
      if (result === 'key') {
        if (this.videosForm.get('key').disabled) {
          this.videosForm.get('key').enable();
        }
        if (this.videosForm.get('accessToken').enabled) {
          this.videosForm.get('accessToken').disable();
        }
      } else if (result === 'oauth') {
        if (this.videosForm.get('key').enabled) {
          this.videosForm.get('key').disable();
        }
        if (this.videosForm.get('accessToken').disabled) {
          this.videosForm.get('accessToken').enable();
        }
      }
    });
    this.route.queryParams.subscribe(result => {
      for (const prop in result) {
        if (result.hasOwnProperty(prop)) {
          switch (prop) {
            case 'chart':
            case 'id':
            case 'myRating':
            case 'hl':
            case 'maxHeight':
            case 'maxResults':
            case 'maxWidth':
            case 'pageToken':
            case 'regionCode':
            case 'videoCategoryById':
              this.videosForm.patchValue({ [prop]: result[prop] });
              break;
            default:
              console.warn(`The parameter ${prop} isn't defined in the form!`);
              break;
          }
        }
      }
    });
    if (localStorage['oauth-token']) {
      this.videosForm.patchValue({ 'accessToken': localStorage['oauth-token'] });
      this.authMethod.patchValue('oauth');
    }
  }
  submitForm() {
    if (!this.shared.isOnline) {
      const snackBarRef = this.snackBar.open(
        'Error: Your device is offline. Please check and ensure that you have a stable internet connection before retrying.',
        'Retry',
        { duration: 5000 }
      );
      snackBarRef.onAction().subscribe(() => {
        this.submitForm();
      });
    } else {
      if (this.videosForm.valid) {
        this.getApiResult();
      }
    }
  }
  getApiResult(pageToken?: string) {
    const _apiConfig = this.videosForm.value;
    if (!_apiConfig.hasOwnProperty('pageToken')) {
      _apiConfig['pageToken'] = pageToken;
    }
    this.ytApi.list(_apiConfig).subscribe(result => {
      this.videosListResult = result;
    }, error => {
      this.errorResult = error;
    });
  }
  reset() {
    this.videosForm.reset();
    this.videosListResult = null;
  }
  oAuthAuthenticate() {
    const signInWindow = this.shared.oAuthSignInWindow('https://www.googleapis.com/auth/youtube');
    signInWindow.addEventListener('unload', (ev) => {
      console.log(ev);
    });
    signInWindow.addEventListener('beforeunload', (ev) => {
      console.log(ev);
      this.snackBar.open('Reloading...');
      window.location.reload();
    });
  }
  copyLink() {
    let baseUrl = `${window.location.origin}${window.location.pathname}`;
    const searchFormVal = this.videosForm.value;
    for (const key in searchFormVal) {
      if (searchFormVal[key] !== undefined && searchFormVal[key]) {
        // Checks if the URL that we're working with doesn't have a
        // question mark at the end.
        // This is to prevent duplicate question marks from showing
        if (new RegExp(/.+\?.*=.*/).test(baseUrl)) {
          baseUrl = `${baseUrl}&${key}=${encodeURIComponent(searchFormVal[key])}`;
        } else {
          baseUrl = `${baseUrl}?${key}=${encodeURIComponent(searchFormVal[key])}`;
        }
      }
    }
    this.shared.copyText(baseUrl);
  }
}

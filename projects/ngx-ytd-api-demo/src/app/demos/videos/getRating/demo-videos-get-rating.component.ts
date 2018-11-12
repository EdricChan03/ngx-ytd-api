import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgxYtdApiVideosService } from 'ngx-ytd-api/videos';
import { SharedService } from '../../../shared.service';
import { YtVideoPickerService } from '../../../shared/yt-video-picker/yt-video-picker.service';
import { SelectionModel } from '@angular/cdk/collections';
import { NgxYtdApiSearchResource } from 'ngx-ytd-api';

@Component({
  selector: 'app-demo-videos-get-rating',
  templateUrl: './demo-videos-get-rating.component.html',
  styleUrls: ['./demo-videos-get-rating.component.css']
})
export class DemoVideosGetRatingComponent {
  videosForm: FormGroup;
  useVideoPicker: FormControl;
  videosListResult: any;
  errorResult: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public shared: SharedService,
    private snackBar: MatSnackBar,
    private ytdApi: NgxYtdApiVideosService,
    private ytVideoPicker: YtVideoPickerService
  ) {
    this.videosForm = fb.group({
      id: [null, Validators.required],
      accessToken: [null, Validators.required],
      onBehalfOfContentOwner: { value: null, disabled: true }
    });
    this.videosForm.get('accessToken')
      .statusChanges
      .subscribe(result => {
        if (result === 'INVALID') {
          if (this.videosForm.get('onBehalfOfContentOwner').enabled) {
            this.videosForm.get('onBehalfOfContentOwner').disable();
          }
        } else if (result === 'VALID') {
          if (this.videosForm.get('onBehalfOfContentOwner').disabled) {
            this.videosForm.get('onBehalfOfContentOwner').enable();
          }
        }
      });
    this.useVideoPicker = new FormControl(false);
    this.route.queryParams.subscribe(result => {
      for (const prop in result) {
        if (result.hasOwnProperty(prop)) {
          switch (prop) {
            case 'id':
            case 'onBehalfOfContentOwner':
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
    this.ytdApi.getRating(_apiConfig).subscribe(result => {
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
  openVideoPicker() {
    const dialogRef = this.ytVideoPicker.openPicker({
      apiKey: 'AIzaSyDFmrH-gObYTelaYtA19bnDuP5VBsawlJ8',
      layout: 'table',
      selectMultiple: true,
      title: 'Select a video'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (typeof result !== 'string' && typeof result !== 'undefined') {
        let selected = (result as SelectionModel<NgxYtdApiSearchResource>)
          .selected
          .map(value => value.id.videoId);
        selected = this.shared.removeDuplicates<string>(selected);
        this.videosForm.patchValue({ 'id': selected.join() });
      }
    });
  }
}

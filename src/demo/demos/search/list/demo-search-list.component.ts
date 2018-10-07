import { Component, TemplateRef } from '@angular/core';
import { NgxYtdApiSearchService, NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts } from 'ngx-ytd-api/search';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../../../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-search-list',
  templateUrl: './demo-search-list.component.html',
  styleUrls: ['./demo-search-list.component.css']
})
export class DemoSearchListComponent {
  searchResult: NgxYtdApiSearchListResult;
  errorResult: any;
  // query: string;
  // embeddable: boolean = false;
  // maxResults: number = 50;
  searchForm: FormGroup;
  searchOptionsForm: FormGroup;
  authMethod: FormControl;
  codeDialogRef: MatDialogRef<any>;
  types = [
    {
      value: 'video',
      name: 'Videos only'
    },
    {
      value: 'channel',
      name: 'Channels only'
    },
    {
      value: 'playlist',
      name: 'Playlists only'
    },
    {
      value: 'video,channel',
      name: 'Videos & Channels only'
    },
    {
      value: 'video,playlist',
      name: 'Videos & Playlists only'
    },
    {
      value: 'channel,playlist',
      name: 'Channels & Playlists only'
    },
    {
      value: 'video,channel,playlist',
      name: 'Videos, Channels & Playlists (default)'
    }
  ];
  constructor(
    private ytApi: NgxYtdApiSearchService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public shared: SharedService,
    private route: ActivatedRoute
  ) {
    this.searchForm = fb.group({
      q: ['', Validators.required],
      key: ['', [Validators.required, Validators.maxLength(39), Validators.minLength(39)]],
      accessToken: [{ value: '', disabled: true }],
      maxResults: [50, [Validators.required, Validators.min(0), Validators.max(50)]],
      type: ['video,channel,playlist', Validators.required],
      videoOptions: fb.group({
        videoCaption: 'any',
        videoCategoryId: '',
        videoDefinition: 'any',
        videoDimension: 'any',
        videoDuration: 'any',
        videoEmbeddable: 'any',
        videoLicense: 'any',
        videoSyndicated: 'any',
        videoType: 'any'
      })
    });
    this.searchOptionsForm = fb.group({
      showJsonResult: false,
      showDescription: false,
      resultsView: 'card'
    });
    this.authMethod = new FormControl('key');
    this.authMethod.valueChanges.subscribe(result => {
      if (result === 'key') {
        if (this.searchForm.get('key').disabled) {
          this.searchForm.get('key').enable();
        }
        if (this.searchForm.get('accessToken').enabled) {
          this.searchForm.get('accessToken').disable();
        }
      } else if (result === 'oauth') {
        if (this.searchForm.get('key').enabled) {
          this.searchForm.get('key').disable();
        }
        if (this.searchForm.get('accessToken').disabled) {
          this.searchForm.get('accessToken').enable();
        }
      }
    });
    this.route.queryParams.subscribe(result => {
      for (const prop in result) {
        if (result.hasOwnProperty(prop)) {
          // TODO(Edric): Find out a way to handle query params without a huge switch statement
          switch (prop) {
            case 'showJsonResult':
            case 'showDescription':
            case 'resultsView':
              // Checks if the URL has duplicate query params
              if (result[prop].constructor === Array) {
                if (result[prop].length > 0) {
                  // Only get the first index for this case
                  this.searchOptionsForm.patchValue({ [prop]: result[prop][0] });
                  console.warn(`Duplicate query parameter "${prop}": using first parameter's value`);
                }
              } else {
                this.searchOptionsForm.patchValue({ [prop]: result[prop] });
              }
              break;
            case 'videoCaption':
            case 'videoCategoryId':
            case 'videoDefinition':
            case 'videoDimension':
            case 'videoDuration':
            case 'videoEmbeddable':
            case 'videoLicense':
            case 'videoSyndicated':
            case 'videoType':
              // Checks if the URL has duplicate query params
              if (result[prop].constructor === Array) {
                console.log(result[prop]);
                if (result[prop].length > 0) {
                  // Only get the first index for this case
                  this.searchForm.get('videoOptions').patchValue({ [prop]: result[prop][0] });
                  console.warn(`Duplicate query parameter "${prop}": using first parameter's value`);
                }
              } else {
                this.searchForm.get('videoOptions').patchValue({ [prop]: result[prop] });
              }
              break;
            case 'q':
            case 'query':
            case 'key':
            case 'apiKey':
            case 'maxResults':
            case 'type':
              // Checks if the URL has duplicate query params
              if (result[prop].constructor === Array) {
                if (result[prop].length > 0) {
                  // Only get the first index for this case
                  this.searchForm.patchValue({ [prop]: result[prop][0] });
                  console.warn(`Duplicate query parameter "${prop}": using first parameter's value`);
                }
              } else {
                this.searchForm.patchValue({ [prop]: result[prop] });
              }
              break;
            default:
              console.warn(`The parameter ${prop} isn't defined in the form!`);
              break;
          }
        }
      }
    });
    if (this.shared.getLocalStorageProperty('oauth-token')) {
      this.searchForm.patchValue({ 'accessToken': this.shared.getLocalStorageProperty('oauth-token') });
      this.authMethod.patchValue('oauth');
    }
  }
  get isVideoType(): boolean {
    if (this.searchForm.get('type').value.indexOf('video') > -1) {
      return true;
    } else {
      return false;
    }
  }
  get demoApiConfig(): any {
    const _apiConfig: NgxYtdApiSearchListOpts = {
      key: '',
      q: ''
    };
    const _rawValue = this.searchForm.value;
    for (const prop in _rawValue) {
      if (typeof _rawValue[prop] === 'object') {
        const _rawValueObj = _rawValue[prop];
        if (this.isVideoType) {
          // tslint:disable-next-line:forin
          for (const objProp in _rawValueObj) {
            if (typeof _apiConfig[objProp] === 'string') {
              if (_apiConfig[objProp].length > 0) {
                _apiConfig[objProp] = _rawValueObj[objProp];
              }
            }
          }
        }
        // Assume object is `videoOptions`
        console.log(_rawValue[prop]);
      } else {
        _apiConfig[prop] = _rawValue[prop];
      }
    }
    return _apiConfig;
  }
  get oAuthValue(): string {
    return this.shared.getLocalStorageProperty('oauth-token');
  }
  copyLink() {
    let baseUrl = `${window.location.origin}${window.location.pathname}`;
    const searchFormVal = this.searchForm.value;
    const searchOptsFormVal = this.searchOptionsForm.value;
    for (const key in searchFormVal) {
      // Check if a key's value is an object.
      // Note that null is reported as object when checked
      // against typeof, thus the check for null here.
      if (typeof searchFormVal[key] === 'object') {
        // Assume that we're looking at the 'videoOptions' form group here
        for (const videoOptKey in searchFormVal[key]) {
          if (searchFormVal[key][videoOptKey] !== undefined && searchFormVal[key][videoOptKey]) {
            // Checks if the URL that we're working with doesn't have a
            // question mark at the end.
            // This is to prevent duplicate question marks from showing
            if (new RegExp(/.+\?.*=.*/).test(baseUrl)) {
              baseUrl = `${baseUrl}&${videoOptKey}=${encodeURIComponent(searchFormVal[key][videoOptKey])}`;
            } else {
              baseUrl = `${baseUrl}?${videoOptKey}=${encodeURIComponent(searchFormVal[key][videoOptKey])}`;
            }
          }
        }
      } else {
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
    }
    for (const key in searchOptsFormVal) {
      // Note: Since the form has no nested FormGroup, we don't need to check
      // for a nested object.
      // However, we'll still need a null check to ensure that inputs that
      // are empty won't be added to the query parameters.
      if (searchOptsFormVal[key] !== undefined && searchOptsFormVal[key]) {
        // Checks if the URL that we're working with doesn't have a
        // question mark at the end.
        // This is to prevent duplicate question marks from showing
        if (new RegExp(/.+\?.*=.*/).test(baseUrl)) {
          baseUrl = `${baseUrl}&${key}=${encodeURIComponent(searchOptsFormVal[key])}`;
        } else {
          baseUrl = `${baseUrl}?${key}=${encodeURIComponent(searchOptsFormVal[key])}`;
        }
      }
    }
    this.shared.copyText(baseUrl);
  }
  getValue(value: any, defaultValue: any) {
    return value ? value : defaultValue;
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
      if (this.searchForm.valid) {
        this.search();
      }
    }
  }
  reset() {
    this.searchForm.reset({
      query: '',
      key: '',
      accessToken: '',
      maxResults: 50,
      type: 'video,channel,playlist',
      videoOptions: {
        videoCaption: 'any',
        videoCategoryId: '',
        videoDefinition: 'any',
        videoDimension: 'any',
        videoDuration: 'any',
        videoEmbeddable: 'any',
        videoLicense: 'any',
        videoSyndicated: 'any',
        videoType: 'any'
      }
    });
    this.searchResult = null;
  }
  search(pageToken?: string) {
    const _apiConfig = this.demoApiConfig;
    if (pageToken) {
      _apiConfig.pageToken = pageToken;
    }
    console.log(this.searchForm.value);
    this.ytApi.list(_apiConfig).subscribe(result => {
      this.searchResult = result;
      console.log(result);
    }, error => {
      this.errorResult = error;
    });
  }
  openCodeDialog(templateRef: TemplateRef<any>) {
    this.codeDialogRef = this.dialog.open(templateRef);
  }
  closeCodeDialog() {
    this.codeDialogRef.close();
    this.codeDialogRef = null;
  }
  /*  resetForm() {
      this.query = '';
      this.embeddable = false;
      this.maxResults = 50;
    } */


}

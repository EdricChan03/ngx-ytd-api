import { Component, TemplateRef } from '@angular/core';
import { NgxYtdApiSearchService, NgxYtdApiSearchListResult, NgxYtdApiSearchListOpts } from 'ngx-ytd-api/search';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-demo-search',
  templateUrl: './demo-search.component.html',
  styleUrls: ['./demo-search.component.css']
})
export class DemoSearchComponent {
  searchResult: NgxYtdApiSearchListResult;
  errorResult: any;
  // query: string;
  // embeddable: boolean = false;
  // maxResults: number = 50;
  searchForm: FormGroup;
  searchOptionsForm: FormGroup;
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
    public shared: SharedService
  ) {
    this.searchForm = fb.group({
      q: ['', Validators.required],
      key: ['', [Validators.required, Validators.maxLength(39), Validators.minLength(39)]],
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
      showDescription: false
    });
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
    const _rawValue = this.searchForm.getRawValue();
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
    console.log(this.searchForm.getRawValue());
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

import { Component, TemplateRef } from '@angular/core';
import { NgxYtdApiSearchService, NgxYtdApiSearchResult, NgxYtdApiSearchOpts } from 'ngx-ytd-api/search';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../shared.service';

@Component({
	selector: 'app-demo-search',
	templateUrl: './demo-search.component.html',
	styleUrls: ['./demo-search.component.css']
})
export class DemoSearchComponent {

	searchResult: NgxYtdApiSearchResult;
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
		public shared: SharedService
	) {
		this.searchForm = fb.group({
			query: ['', Validators.required],
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
	getValue(value: any, defaultValue: any) {
		return value ? value : defaultValue;
	}
	submitForm() {
		if (this.searchForm.valid) {
			this.search();
		}
	}
	clearForm() {
		this.searchForm.reset();
	}
	search(pageToken?: string) {
		const _apiConfig: NgxYtdApiSearchOpts = {
			key: ''
		};
		const _rawValue = this.searchForm.getRawValue();
		for (const prop in _rawValue) {
			if (typeof _rawValue[prop] === 'object') {
				const _rawValueObj = _rawValue[prop];
				if (this.isVideoType) {
					// tslint:disable-next-line:forin
					for (const objProp in _rawValueObj) {
						// console.log(_rawValueObj[objProp])
						_apiConfig[objProp] = _rawValueObj[objProp];
					}
				}
				// Assume object is `videoOptions`
				console.log(_rawValue[prop]);
			} else {
				_apiConfig[prop] = _rawValue[prop];
			}
		}
		if (pageToken) {
			_apiConfig.pageToken = pageToken;
		}
		// const _apiConfig: NgxYtdApiSearchOpts = this.searchForm.getRawValue();
		console.log(this.searchForm.getRawValue());
		this.ytApi.search(this.searchForm.get('query').value, _apiConfig).subscribe(result => {
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
	/* 	resetForm() {
			this.query = '';
			this.embeddable = false;
			this.maxResults = 50;
		} */


}

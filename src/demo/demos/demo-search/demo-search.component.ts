import { Component, TemplateRef } from '@angular/core';
import { NgxYtdApiSearchService, NgxYtdApiSearchResult, NgxYtdApiVideoSearchOpts } from 'ngx-ytd-api/search';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

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
	constructor(
		private ytApi: NgxYtdApiSearchService,
		private fb: FormBuilder,
		private dialog: MatDialog
	) {
		this.searchForm = fb.group({
			query: ['', Validators.required],
			embeddable: false,
			maxResults: [50, [Validators.required, Validators.min(0), Validators.max(50)]]
		});
		this.searchOptionsForm = fb.group({
			showJsonResult: false,
			showDescription: false
		});
	}
	getValue(value: any, defaultValue: any) {
		return value ? value : defaultValue;
	}
	submitForm() {
		if (this.searchForm.valid) {
			this.searchVideos();
		}
	}
	clearForm() {
		this.searchForm.reset();
	}
	searchVideos(pageToken?: string) {
		const _apiConfig: NgxYtdApiVideoSearchOpts = {
			apiKey: 'AIzaSyBfSbMRADGI3zILVFbej0zb2v9_020SHlY',
			videoEmbeddable: this.getValue(this.searchForm.get('embeddable').value, false),
			maxResults: this.getValue(this.searchForm.get('maxResults').value, 50)
		};
		if (pageToken) {
			_apiConfig['pageToken'] = pageToken;
		}
		this.ytApi.searchVideos(this.searchForm.get('query').value, _apiConfig).subscribe(result => {
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

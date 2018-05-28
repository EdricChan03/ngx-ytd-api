import { Component, TemplateRef } from '@angular/core';
import { NgxYtdApiSearchService, NgxYtdApiSearchResult } from 'ngx-ytd-api/search';
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
	codeDialogRef: MatDialogRef<any>;
	constructor(
		private ytApi: NgxYtdApiSearchService,
		private fb: FormBuilder,
		private dialog: MatDialog
	) {
		this.searchForm = fb.group({
			query: ['', Validators.required],
			embeddable: false,
			maxResults: [50, [Validators.required, Validators.min(0), Validators.max(50)]],
			showJsonResult: false
		});
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
		if (pageToken) {
			this.ytApi.searchVideos(this.searchForm.get('query').value, { apiKey: 'AIzaSyBfSbMRADGI3zILVFbej0zb2v9_020SHlY', videoEmbeddable: this.searchForm.get('embeddable').value, maxResults: this.searchForm.get('maxResults').value, pageToken: pageToken }).subscribe(result => {
				this.searchResult = result;
				console.log(result);
			}, error => {
				this.errorResult = error;
			})
		} else {
			this.ytApi.searchVideos(this.searchForm.get('query').value, { apiKey: 'AIzaSyBfSbMRADGI3zILVFbej0zb2v9_020SHlY', videoEmbeddable: this.searchForm.get('embeddable').value, maxResults: this.searchForm.get('maxResults').value }).subscribe(result => {
				this.searchResult = result;
				console.log(result);
			}, error => {
				this.errorResult = error;
			})
		}
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

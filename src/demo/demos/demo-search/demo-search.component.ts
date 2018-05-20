import { Component } from '@angular/core';
import { NgxYtdApiService } from 'ngx-ytd-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-search',
  templateUrl: './demo-search.component.html',
  styleUrls: ['./demo-search.component.css']
})
export class DemoSearchComponent {

	searchResult: any;
	errorResult: any;
	// query: string;
	// embeddable: boolean = false;
	// maxResults: number = 50;
	searchForm: FormGroup;
	constructor(private ytApi: NgxYtdApiService, private fb: FormBuilder) {
		this.searchForm = fb.group({
			query: ['', Validators.required],
			embeddable: false,
			maxResults: [50, [Validators.required, Validators.min(1), Validators.max(100)]]
		});
	}
	clearForm() {
		this.searchForm.reset();
	}
	searchVideos() {
		this.ytApi.searchVideos(this.searchForm.get('query').value, {apiKey: 'AIzaSyBfSbMRADGI3zILVFbej0zb2v9_020SHlY', videoEmbeddable: this.searchForm.get('embeddable').value, maxResults: this.searchForm.get('maxResults').value}).subscribe(result => {
			this.searchResult = result;
			console.log(result);
			this.resetForm();
		}, error => {
			this.errorResult = error;
		})
	}
/* 	resetForm() {
		this.query = '';
		this.embeddable = false;
		this.maxResults = 50;
	} */


}

import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VERSION as ngxYtdApiVersion } from 'ngx-ytd-api';
import { environment } from '../../environments/environment';

export interface VersionFile {
	latest: string;
	versions: VersionMenuItem[];
}
export interface VersionMenuItem {
	type: 'version' | 'subheader';
	name: string;
	link?: string;
	hidden?: boolean;
}
@Component({
	selector: 'app-version-picker',
	templateUrl: './version-picker.component.html',
	styleUrls: ['./version-picker.component.css']
})
export class VersionPickerComponent implements OnInit {
	currentVersion = ngxYtdApiVersion.full;
	versions: VersionFile;
	constructor(private http: HttpClient) { }
	ngOnInit() {
		if (environment.production) {
			this.http.get<VersionFile>('/versions.json').subscribe(result => {
				this.versions = result;
			});
		} else {
			this.versions = {
				latest: 'my-version',
				versions: [
					{
						type: 'version',
						name: 'testing-version',
						link: '/'
					},
					{
						type: 'version',
						name: 'testing-version',
						link: '/'
					}
				]
			};
		}
	}
}

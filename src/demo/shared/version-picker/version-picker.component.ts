import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface VersionMenuItem {
	routerLink: string;
	version: string;
	hidden?: boolean;
}
@Component({
	selector: 'app-version-picker',
	templateUrl: './version-picker.component.html',
	styleUrls: ['./version-picker.component.css']
})
export class VersionPickerComponent implements OnInit {
	currentVersion = '1.0.0-alpha.2';
	versions: VersionMenuItem[];
	constructor(private http: HttpClient) { }
	onMenuItemClick(version: VersionMenuItem, event: Event) {
		if (version.disabled) {
			event.preventDefault();
		}
	}
	ngOnInit() {
		if (environment.production) {
			this.http.get<VersionMenuItem[]>('/versions.json').subscribe(result => {
				this.versions = result;
			})
		}
	}
}

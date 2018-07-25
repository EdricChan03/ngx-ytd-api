import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VERSION as ngxYtdApiVersion } from 'ngx-ytd-api';
import { environment } from '../../environments/environment';

export interface VersionFile {
  versions: VersionMenuItem[];
}
export interface VersionMenuItem {
  type: 'version' | 'subheader' | 'divider' | 'dividerInset';
  isSelected?: boolean;
  name?: string;
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
        versions: [
          {
            type: 'version',
            name: this.currentVersion,
            link: '/',
            isSelected: true
          },
          {
            type: 'divider'
          },
          {
            type: 'subheader',
            name: 'Other versions'
          },
          {
            type: 'version',
            name: '0.0.0-alpha.0',
            link: '/'
          },
          {
            type: 'version',
            name: '0.0.0-beta.0',
            link: '/'
          },
          {
            type: 'version',
            name: '0.0.0-rc.0',
            link: '/'
          }
        ]
      };
    }
  }
}

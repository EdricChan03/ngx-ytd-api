import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VERSION as ngxYtdApiVersion } from 'ngx-ytd-api/core';
import { environment } from '../../../environments/environment';

export interface VersionFile {
  versions: VersionMenuItem[];
}
export interface VersionMenuItem {
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
  /** Whether to hide the dropdown arrow. */
  @Input() hideDropDownArrow = false;
  currentVersion = ngxYtdApiVersion.full;
  versions: VersionFile;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    if (environment.production) {
      this.http.get<VersionFile>('/versions.json').subscribe(result => {
        const masterVersionMenuItem = result.versions.find(item => item.name === 'MASTER_VERSION');
        masterVersionMenuItem.name = this.currentVersion;
        this.versions = result;
      });
    } else {
      this.versions = {
        versions: [
          {
            name: this.currentVersion,
            link: '/',
            isSelected: true
          },
          {
            name: '0.0.0-alpha.0',
            link: '/'
          },
          {
            name: '0.0.0-beta.0',
            link: '/'
          },
          {
            name: '0.0.0-rc.0',
            link: '/'
          }
        ]
      };
    }
  }
}

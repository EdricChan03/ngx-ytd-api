import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { NgxYtdApiVideoService, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult } from 'ngx-ytd-api/videos';

@Component({
	selector: 'app-demo-videos',
	templateUrl: './demo-videos.component.html',
	styleUrls: ['./demo-videos.component.css']
})
export class DemoVideosComponent {
	constructor(
		public shared: SharedService,
		private ytApi: NgxYtdApiVideoService
	) { }
	testing() {
		this.ytApi.list({ key: 'trhrtht'}).subscribe(result => {
			// result.items[0].fileDetails.videoStreams[2]
		})
	}
}

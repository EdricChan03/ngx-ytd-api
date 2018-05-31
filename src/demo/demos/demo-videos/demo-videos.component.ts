import { Component } from '@angular/core';
import { NgxYtdApiService } from 'ngx-ytd-api';
import { SharedService } from '../../shared.service';

@Component({
	selector: 'app-demo-videos',
	templateUrl: './demo-videos.component.html',
	styleUrls: ['./demo-videos.component.css']
})
export class DemoVideosComponent {
	constructor(
		public shared: SharedService
	) { }
}

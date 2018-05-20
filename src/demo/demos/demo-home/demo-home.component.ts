import { Component, OnInit } from '@angular/core';

import { ListsService, Demo } from '../../lists.service';

@Component({
	selector: 'app-demo-home',
	templateUrl: './demo-home.component.html',
	styleUrls: ['./demo-home.component.css']
})
export class DemoHomeComponent implements OnInit {

	constructor(private listsService: ListsService) { }
	demos: Demo[];
	ngOnInit() {
		this.demos = this.listsService.getDemos();
	}

}

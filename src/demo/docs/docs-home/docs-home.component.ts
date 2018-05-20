import { Component, OnInit } from '@angular/core';
import { ListsService, Doc } from '../../lists.service';

@Component({
	selector: 'app-docs-home',
	templateUrl: './docs-home.component.html',
	styleUrls: ['./docs-home.component.css']
})
export class DocsHomeComponent implements OnInit {

	constructor(private listService: ListsService) { }
	docs: Doc[];
	ngOnInit() {
		this.docs = this.listService.getDocs();
	}

}

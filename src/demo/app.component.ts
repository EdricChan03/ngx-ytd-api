import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ListsService, Demo, Doc } from './lists.service';
import { SharedService } from './shared.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		trigger('toggleIconAnim', [
			state('toggled', style({
				transform: 'rotate(90deg)'
			})),
			state('notToggled', style({
				transform: 'rotate(0deg)'
			})),
			transition('* => *', animate('200ms ease-in-out'))
		]),
		trigger('toggleItemsAnim', [
			state('notToggled', style({
				visibility: 'hidden',
				opacity: 0,
				'max-height': '0'
			})),
			state('toggled', style({
				visibility: 'visible',
				opacity: 1,
				'max-height': '4000px'
			})),
			transition('notToggled => toggled', animate('500ms ease-in-out')),
			transition('toggled => notToggled', animate('280ms ease-out'))
		])
	]
})
export class AppComponent implements OnInit {
	toggleState: 'toggled' | 'notToggled' = 'notToggled';
	toggleStateDocs: 'toggled' | 'notToggled' = 'notToggled';
	demos: Demo[];
	docs: Doc[];
	@ViewChild('docsSidenav') sidenav: MatSidenav;
	constructor(
		private listsService: ListsService,
		private shared: SharedService
	) { }
	ngOnInit() {
		this.demos = this.listsService.getDemos();
		this.docs = this.listsService.getDocs();
		this.shared.sidenav = this.sidenav;
	}
	preventDefault(event: KeyboardEvent | MouseEvent) {
		event.preventDefault();
		event.stopImmediatePropagation();
		event.stopPropagation();
	}
	// tslint:disable-next-line:no-shadowed-variable
	toggleStates(state: 'demos' | 'docs') {
		if (state === 'demos') {
			if (this.toggleState === 'toggled') {
				this.toggleState = 'notToggled';
			} else {
				this.toggleState = 'toggled';
			}
		} else if (state === 'docs') {
			if (this.toggleStateDocs === 'toggled') {
				this.toggleStateDocs = 'notToggled';
			} else {
				this.toggleStateDocs = 'toggled';
			}
		}
	}
	toggleDemosList(event: KeyboardEvent | MouseEvent) {
		this.preventDefault(event);
		this.toggleStates('demos');
		// Do some stuff
	}
	toggleDocsList(event: KeyboardEvent | MouseEvent) {
		this.preventDefault(event);
		this.toggleStates('docs');
		// Do some stuff
	}
}

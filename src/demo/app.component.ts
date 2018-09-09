import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ListsService, Demo, Doc } from './lists.service';
import { SharedService } from './shared.service';
import { MatSidenav } from '@angular/material/sidenav';

declare type ToggleState = 'notToggled' | 'toggled';

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
  toggleStateDocs: ToggleState = 'notToggled';
  toggleStateList: ToggleState = 'notToggled';
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
  preventDefault(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }
  // tslint:disable-next-line:no-shadowed-variable
  toggleStates(state: 'demos' | 'docs') {
     if (state === 'docs') {
      if (this.toggleStateDocs === 'toggled') {
        this.toggleStateDocs = 'notToggled';
      } else {
        this.toggleStateDocs = 'toggled';
      }
    }
    if (this.toggleStateDocs === 'toggled') {
      this.toggleStateList = 'toggled';
    } else {
      this.toggleStateList = 'notToggled';
    }
  }
  toggleLists(event?: Event) {
    if (this.toggleStateList === 'toggled') {
      this.toggleStateList = 'notToggled';
      this.toggleStateDocs = 'notToggled';
    } else {
      this.toggleStateList = 'toggled';
      this.toggleStateDocs = 'toggled';
    }
  }
  toggleDocsList(event?: MouseEvent) {
    if (event) {
      this.preventDefault(event);
    }
    this.toggleStates('docs');
    // Do some stuff
  }
}

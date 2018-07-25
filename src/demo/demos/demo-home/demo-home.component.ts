import { Component, OnInit } from '@angular/core';

import { ListsService, Demo } from '../../lists.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.css']
})
export class DemoHomeComponent implements OnInit {

  constructor(
    private listsService: ListsService,
    public shared: SharedService
  ) { }
  demos: Demo[];
  ngOnInit() {
    this.demos = this.listsService.getDemos();
  }

}

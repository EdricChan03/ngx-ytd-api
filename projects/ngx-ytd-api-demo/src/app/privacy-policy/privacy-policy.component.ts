import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {

  constructor(public shared: SharedService) { }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from '../routingstate.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  hasError = false;
  errorCode: string;
  constructor(
    private router: Router,
    public routingState: RoutingStateService,
    private snackbar: MatSnackBar,
    private shared: SharedService
  ) { }
  ngOnInit() {
    setTimeout(() => {
      // Implementation based on https://github.com/timdream/wordcloud/blob/6d483cd91378e35b54e54efbc6f46ad2dd634113/go2.js
      if (window.location.hash.indexOf('error') === -1) {
        if (window.location.hash.indexOf('access_token') !== -1) {
          const accessToken = this.shared.getFragmentValue('access_token');
          localStorage.setItem('oauth-token', accessToken);
        }
      } else {
        this.hasError = true;
        this.snackbar.open('An error occurred while authenticating. Try again later.');
        const error = this.shared.getFragmentValue('error');
        console.error(`An error occurred while authenticating. Error code: ${error}`);
        this.errorCode = error;
      }
      if (!this.hasError) {
        this.router.navigateByUrl(this.routingState.getPreviousUrl());
      }
    });
  }
}

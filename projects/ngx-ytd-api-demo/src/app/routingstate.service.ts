import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingStateService {
  history = [];

  constructor(
    private router: Router
  ) { }

  init() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
      });
  }
  /**
   * Retrieves the Router history
   * @deprecated Use the `history` property
   */
  getHistory(): string[] {
    return this.history;
  }

  /**
   * Retrieves the previous URL that was navigated to
   */
  getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/home';
  }
}

import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private _sidenav: MatSidenav;
	set sidenav(sidenavVar: MatSidenav) {
		this._sidenav = sidenavVar;
	}
	get sidenav(): MatSidenav {
		return this._sidenav;
	}
	/*
	toggleSidenav(sidenav?: MatSidenav) {
		if (this._sidenav && !sidenav) {
			this._sidenav.toggle();
		} else {
			sidenav.toggle();
		}
	}
	*/
}

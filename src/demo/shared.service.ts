import { Injectable, Component, NgModule } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from './material.module';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	constructor(
		private dialog: MatDialog
	) { }
	private _sidenav: MatSidenav;
	set sidenav(sidenavVar: MatSidenav) {
		this._sidenav = sidenavVar;
	}
	get sidenav(): MatSidenav {
		return this._sidenav;
	}
	get isProd(): boolean {
		return environment.production;
	}
	openDevConfig() {
		this.dialog.open(DevModeDialogComponent);
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

@Component({
	selector: 'app-dev-mode-dialog',
	template: `
	<h2 matDialogTitle>Developer Mode</h2>
	<mat-dialog-content fxLayout="column">
		<p>This dialog is used for configuring options in developer mode.</p>
		<mat-slide-toggle>Show version picker</mat-slide-toggle>
		<br>
	</mat-dialog-content>
	<mat-dialog-actions align="end">
		<button mat-button color="primary" matDialogClose>Cancel</button>
		<button mat-button color="primary" (click)="onSave()">Save</button>
	`
})
export class DevModeDialogComponent {
	constructor(private dialogRef: MatDialogRef<DevModeDialogComponent>) { }
	onSave() {
		this.dialogRef.close();
	}
}

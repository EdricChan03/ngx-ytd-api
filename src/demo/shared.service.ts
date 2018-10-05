import { Injectable, Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dev-mode-dialog',
  template: `
  <h2 matDialogTitle>Developer Mode</h2>
  <mat-dialog-content fxLayout="column">
    <p>This dialog is used for configuring options in developer mode.</p>
    <mat-checkbox>Show version picker</mat-checkbox>
    <br>
    <mat-checkbox>Show developer mode chip</mat-checkbox>
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

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    /**
     * An instance of the Material dialog component
     */
    public dialog: MatDialog,
    /**
     * An instance of the Material snackbar component
     */
    public snackbar: MatSnackBar
  ) { }
  private _sidenav: MatSidenav;
  /**
   * A sidenav to set
   */
  set sidenav(sidenavVar: MatSidenav) {
    this._sidenav = sidenavVar;
  }
  /**
   * Getter to retrieve sidenav
   */
  get sidenav(): MatSidenav {
    return this._sidenav;
  }
  /**
   * Checks whether the app is deployed in production mode
   */
  get isProd(): boolean {
    return environment.production;
  }
  /**
   * Checks whether the user is online
   */
  get isOnline(): boolean {
    return navigator.onLine;
  }
  /**
   * Opens a developer config dialog
   */
  openDevConfig() {
    this.dialog.open(DevModeDialogComponent);
  }
  /**
   * Shortcut method to print the current document
   */
  printDocument() {
    window.print();
  }
    }
  }
}

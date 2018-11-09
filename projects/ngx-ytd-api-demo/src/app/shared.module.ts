import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedService } from './shared.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }

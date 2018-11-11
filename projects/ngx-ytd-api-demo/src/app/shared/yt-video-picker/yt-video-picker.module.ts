import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NgxYtdApiSearchModule } from 'ngx-ytd-api/search';
import { SharedService } from '../../shared.service';
import { YtVideoPickerComponent } from './yt-video-picker.component';
import { YtVideoPickerService } from './yt-video-picker.service';

@NgModule({
  declarations: [
    YtVideoPickerComponent
  ],
  entryComponents: [
    YtVideoPickerComponent
  ],
  exports: [
    YtVideoPickerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    NgxYtdApiSearchModule
  ],
  providers: [
    SharedService,
    YtVideoPickerService
  ]
})
export class YtVideoPickerModule { }

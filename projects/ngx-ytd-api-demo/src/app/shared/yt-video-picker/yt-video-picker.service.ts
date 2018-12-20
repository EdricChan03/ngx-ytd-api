import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxYtdApiSearchResource } from 'ngx-ytd-api';
import { YtVideoPickerComponent, YtVideoPickerOpts } from './yt-video-picker.component';

@Injectable()
export class YtVideoPickerService {

  constructor(
    private dialog: MatDialog
  ) { }
  /**
   * Opens a video picker
   * @param opts Options for the picker
   * @param dialogConfig Dialog options
   * @return A dialog reference of the picker
   */
  openPicker(
    opts: YtVideoPickerOpts,
    dialogConfig?: MatDialogConfig<YtVideoPickerOpts>
  ): MatDialogRef<YtVideoPickerComponent, SelectionModel<NgxYtdApiSearchResource> | string> {
    let pickerConfig: MatDialogConfig<YtVideoPickerOpts>;
    if (dialogConfig) {
      // Override the data property with options for the picker
      dialogConfig.data = opts;
      pickerConfig = dialogConfig;
    } else {
      const tempConfig = new MatDialogConfig<YtVideoPickerOpts>();
      tempConfig.data = opts;
      pickerConfig = tempConfig;
    }
    return this.dialog.open<
      YtVideoPickerComponent,
      YtVideoPickerOpts,
      SelectionModel<NgxYtdApiSearchResource> | string
      >(YtVideoPickerComponent, pickerConfig);
  }
}

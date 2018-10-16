import { NgModule } from '@angular/core';
import { DevModeDialogComponent, SharedService } from './shared.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    DevModeDialogComponent
  ],
  entryComponents: [
    DevModeDialogComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    DevModeDialogComponent
  ]
})
export class SharedModule { }

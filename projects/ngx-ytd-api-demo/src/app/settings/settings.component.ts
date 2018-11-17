import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public shared: SharedService,
    private snackBar: MatSnackBar
  ) {
    this.settingsForm = fb.group({
      'darkModeEnabled': false,
      'indentSpacing': '2'
    });
  }

  reset() {
    this.settingsForm.reset();
    delete localStorage['settings'];
    this.snackBar.open('Successfully reset form!');
  }
  save() {
    localStorage['settings'] = JSON.stringify(this.settingsForm.value);
    this.snackBar.open('Successfully saved settings!');
  }
  ngOnInit() {
    if (localStorage['settings']) {
      try {
        this.settingsForm.patchValue(JSON.parse(localStorage['settings']));
      } catch (e) {
        console.error('Couldn\'t set settings: ', e);
      }
    }
  }

}

import { Component, Input } from '@angular/core';

export interface VersionMenuItem {
	routerLink: string;
	version: string;
	disabled?: boolean;
}
@Component({
	selector: 'app-version-picker',
	templateUrl: './version-picker.component.html',
	styleUrls: ['./version-picker.component.css']
})
export class VersionPickerComponent {
	@Input() currentVersion = '1.0.0-alpha.2';
	@Input() versions?: VersionMenuItem[] = [
		{
			routerLink: '/master',
			version: 'master'
		},
		{
			routerLink: '/1.0.0-alpha.1',
			version: '1.0.0-alpha.1',
			disabled: true
		},
		{
			routerLink: '/1.0.0-alpha.2',
			version: '1.0.0-alpha.2'
		}
	];
	onMenuItemClick(version: VersionMenuItem, event: Event) {
		if (version.disabled) {
			event.preventDefault();
		}
	}
}

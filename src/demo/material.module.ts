import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatDividerModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTooltipModule
	]
})
export class MaterialModule {
	constructor(private dom: DomSanitizer, private iconRegistry: MatIconRegistry) {
		iconRegistry.addSvgIconSetInNamespace('docs', dom.bypassSecurityTrustResourceUrl('assets/mdi-icons.svg'));
	}
}
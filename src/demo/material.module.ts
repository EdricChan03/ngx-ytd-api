import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTooltipModule
	],
	providers: [
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
	]
})
export class MaterialModule {
	constructor(private dom: DomSanitizer, private iconRegistry: MatIconRegistry) {
		iconRegistry.addSvgIconSetInNamespace('docs', dom.bypassSecurityTrustResourceUrl('assets/mdi-icons.svg'));
	}
}

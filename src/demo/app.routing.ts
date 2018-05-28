import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DemoVideosComponent } from './demos/demo-videos/demo-videos.component';
import { DemoHomeComponent } from './demos/demo-home/demo-home.component';
import { DemoSearchComponent } from './demos/demo-search/demo-search.component';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';

const APP_ROUTES: Route[] = [
	{ path: 'demos', children: [
		{ path: 'videos', component: DemoVideosComponent },
		{ path: 'search', component: DemoSearchComponent },
		{ path: 'demoList', component: DemoHomeComponent },
		{ path: '**', redirectTo: '/demos/demoList' }
	]},
	{ path: 'docs', children: [
		{ path: 'docList', component: DocsHomeComponent },
		{ path: '**', redirectTo: '/docs/docList'}
	]}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

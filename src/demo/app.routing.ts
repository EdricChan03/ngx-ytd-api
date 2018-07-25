import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DemoVideosComponent } from './demos/demo-videos/demo-videos.component';
import { DemoHomeComponent } from './demos/demo-home/demo-home.component';
import { DemoSearchComponent } from './demos/demo-search/demo-search.component';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';

const APP_ROUTES: Route[] = [
  { path: 'demos', children: [
    { path: '', component: DemoHomeComponent },
    { path: 'videos', component: DemoVideosComponent },
    { path: 'search', component: DemoSearchComponent }
  ]},
  { path: 'docs', children: [
    { path: '', component: DocsHomeComponent }
  ]},
  // { path: 'docs', redirectTo: '/docs/docsList' },
  { path: '**', redirectTo: '/docs' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

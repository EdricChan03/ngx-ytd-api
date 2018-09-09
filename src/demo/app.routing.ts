import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DemoVideosComponent } from './demos/videos/demo-videos.component';
import { DemoHomeComponent } from './demos/home/demo-home.component';
import { DemoSearchListComponent } from './demos/search/list/demo-search-list.component';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';

const APP_ROUTES: Route[] = [
  {
    path: 'demos', children: [
      { path: '', component: DemoHomeComponent },
      { path: 'videos', component: DemoVideosComponent },
      {
        path: 'search', children: [
          { path: 'list', component: DemoSearchListComponent },
          { path: '', redirectTo: '/demos/search/list', pathMatch: 'full' }
        ]
      }
    ]
  },
  {
    path: 'docs', children: [
      { path: '', component: DocsHomeComponent }
    ]
  },
  // { path: 'docs', redirectTo: '/docs/docsList' },
  { path: '**', redirectTo: '/docs' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

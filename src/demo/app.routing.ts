import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DemoVideosComponent } from './demos/videos/demo-videos.component';
import { DemoHomeComponent } from './demos/home/demo-home.component';
import { DemoSearchListComponent } from './demos/search/list/demo-search-list.component';
import { DocsHomeComponent } from './docs/docs-home/docs-home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CallbackComponent } from './callback/callback.component';

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
  // Handler for Google's OAuth
  { path: 'callback', component: CallbackComponent },
  { path: 'docs', component: DocsHomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'policy', redirectTo: '/privacy-policy' },
  { path: 'privacy', redirectTo: '/privacy-policy' },
  { path: '**', redirectTo: '/docs' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

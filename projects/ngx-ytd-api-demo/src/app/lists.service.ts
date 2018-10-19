import { Injectable } from '@angular/core';

interface GenericItem {
  /**
   * The name of the demo
   */
  name: string;
  /**
   * The ID of the demo (to be used with the Angular Router)
   */
  id: string;
  /**
   * The (Material) icon
   */
  icon?: string;
  /**
   * An SVG icon reference
   */
  svgIcon?: string;
}
export interface Demo extends GenericItem {
  /**
   * Methods of the API the demo is showcasing
   */
  methods?: Demo[];
}
export interface Doc extends GenericItem {
  /**
   * A link to the documentation on GitHub
   */
  href: string;
}

const DEMOS: Demo[] = [
  {
    name: 'Comments',
    id: 'comments',
    icon: 'comment'
  },
  {
    name: 'Search',
    id: 'search',
    icon: 'search',
    methods: [
      {
        name: 'list',
        id: 'list',
        icon: 'search'
      }
    ]
  },
  {
    name: 'Videos',
    id: 'videos',
    icon: 'video_library',
    methods: [
      {
        name: 'list',
        id: 'list',
        icon: 'video_library'
      }
    ]
  }
];
const DOCS: Doc[] = [
  {
    name: 'Getting started',
    id: 'getting-started',
    href: 'docs/GETTING_STARTED.md',
    icon: 'chrome_reader_mode'
  }
];
@Injectable({
  providedIn: 'root'
})
export class ListsService {
  /**
   * Retrieves demos
   */
  getDemos(): Demo[] {
    return DEMOS;
  }
  /**
   * Retrieves documentation
   */
  getDocs(): Doc[] {
    return DOCS;
  }
}

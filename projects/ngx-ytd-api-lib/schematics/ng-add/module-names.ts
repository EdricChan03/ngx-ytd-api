/**
 * Interface used for an Angular Module from the `ngx-ytd-api` library
 */
export interface ModuleName {
  /**
   * The name of the module as a literal string
   */
  name: string;
  /**
   * The API type of the module
   */
  type: string;
  /**
   * The full module path to import the module from
   */
  importFrom: string;
}
/**
 * An array of module names
 */
export const moduleNames: ModuleName[] = [
  {
    name: 'NgxYtdApiCommentsModule',
    type: 'comments',
    importFrom: 'ngx-ytd-api/comments'
  },
  {
    name: 'NgxYtdApiSearchModule',
    type: 'search',
    importFrom: 'ngx-ytd-api/search'
  },
  {
    name: 'NgxYtdApiVideosModule',
    type: 'videos',
    importFrom: 'ngx-ytd-api/videos'
  }
];

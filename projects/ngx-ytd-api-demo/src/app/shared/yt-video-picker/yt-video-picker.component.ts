import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { NgxYtdApiSearchResource, NgxYtdApiSearchService } from 'ngx-ytd-api/search';
import { switchMap } from 'rxjs/operators';
import { SharedService } from '../../shared.service';

/**
 * The layout of a video picker
 * Values:
 * - `grid`: Represents the view as a grid (Not implemented)
 * - `table`: Represents the view as a table
 */
export type PickerLayout = 'grid' | 'table';
/**
 * Options for the video picker
 * Passed in through the `data` property
 */
export interface YtVideoPickerOpts {
  /**
   * The API key to be used for the YouTube Data v3 Search API
   */
  apiKey: string;
  /**
   * Sets the layout of the video picker
   */
  // TODO: Add support for the `layout` parameter. Currently this does nothing.
  layout?: PickerLayout;
  /**
   * Whether to enable the selection of multiple videos
   *
   * Note: When this is enabled, the selection will be set to an array.
   */
  selectMultiple: boolean;
  /**
   * Sets the title of the video picker
   */
  title?: string;
}
@Component({
  selector: 'app-yt-video-picker',
  templateUrl: './yt-video-picker.component.html',
  styleUrls: ['./yt-video-picker.component.css']
})
export class YtVideoPickerComponent implements AfterViewInit, OnInit {
  /**
   * A current selection
   * @private
   */
  selection: SelectionModel<NgxYtdApiSearchResource>;
  /**
   * Data
   * @private
   */
  data: NgxYtdApiSearchResource[] = [];
  /**
   * The search Reactive Form
   * @private
   */
  searchForm: FormGroup;
  /**
   * The columns to display
   * @private
   */
  displayedColumns = ['select', 'thumbnail', 'title', 'channelTitle', 'publishedAt'];
  /**
   * The total number of results returned from the API
   * @private
   */
  resultsLength: number;
  /**
   * The next page token
   * @private
   */
  nextPageToken: string;
  /**
   * The previous page token
   * @private
   */
  prevPageToken: string;
  /**
   * The current page size
   * @private
   */
  currentPageSize: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public opts: YtVideoPickerOpts,
    private shared: SharedService,
    private snackBar: MatSnackBar,
    private ytdApi: NgxYtdApiSearchService
  ) {
    this.searchForm = fb.group({
      query: [null, Validators.required]
    });
  }
  searchVideos() {
    if (this.searchForm.invalid) {
      this.snackBar.open('Please enter a query');
    } else {
      if (!this.shared.isOnline) {
        const snackBarRef = this.snackBar.open(
          'Error: Your device is offline. Please check your internet connection.',
          'Retry',
          { duration: 5000 }
        );
        snackBarRef.onAction().subscribe(() => {
          this.searchVideos();
        });
      } else {
        this.ytdApi.list({
          key: this.opts.apiKey,
          maxResults: this.paginator.pageSize,
          part: 'snippet,id',
          q: this.searchForm.get('query').value,
          type: 'video'
        })
          .subscribe(result => {
            console.log(result);
            this.data = result.items;
            if (result.nextPageToken) {
              this.nextPageToken = result.nextPageToken;
            } else {
              this.nextPageToken = null;
            }
            if (result.prevPageToken) {
              this.prevPageToken = result.prevPageToken;
            } else {
              this.prevPageToken = null;
            }
            if (this.resultsLength !== result.pageInfo.totalResults) {
              this.resultsLength = result.pageInfo.totalResults;
            }
          }, (error: HttpErrorResponse) => {
            let snackBarRef: MatSnackBarRef<SimpleSnackBar>;
            switch (error.status) {
              case 0:
                snackBarRef = this.snackBar.open(
                  'An error occurred while requesting from the server. Please check your internet connection or try again later.',
                  'Retry',
                  { duration: 5000 }
                );
                break;
            }
            snackBarRef.onAction().subscribe(() => {
              this.searchVideos();
            });
            console.error('An error occurred:', error);
          });
      }
    }
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        switchMap(pageEvent => {
          if (pageEvent.pageSize !== this.currentPageSize) {
            // Reset to the first page
            this.paginator.firstPage();
            this.currentPageSize = pageEvent.pageSize;
            return this.ytdApi.list({
              key: this.opts.apiKey,
              maxResults: pageEvent.pageSize,
              part: 'snippet,id',
              q: this.searchForm.get('query').value,
              type: 'video'
            });
          } else if ((pageEvent.previousPageIndex <= pageEvent.pageIndex) && this.nextPageToken) {
            console.log('User navigated to next page! Using next page token.');
            return this.ytdApi.list({
              key: this.opts.apiKey,
              maxResults: pageEvent.pageSize,
              pageToken: this.nextPageToken,
              part: 'snippet,id',
              q: this.searchForm.get('query').value,
              type: 'video'
            });
          } else if ((pageEvent.previousPageIndex > pageEvent.pageIndex) && this.prevPageToken) {
            console.log('User navigated to previous page! Using previous page token.');
            return this.ytdApi.list({
              key: this.opts.apiKey,
              maxResults: pageEvent.pageSize,
              pageToken: this.prevPageToken,
              part: 'snippet,id',
              q: this.searchForm.get('query').value,
              type: 'video'
            });
          } else {
            console.log('🤔 User probably toggled the page size.');
            return this.ytdApi.list({
              key: this.opts.apiKey,
              maxResults: pageEvent.pageSize,
              part: 'snippet,id',
              q: this.searchForm.get('query').value,
              type: 'video'
            });
          }
        })
      ).subscribe(data => {
        this.data = data.items;
        if (data.nextPageToken) {
          this.nextPageToken = data.nextPageToken;
        } else {
          this.nextPageToken = null;
        }
        if (data.prevPageToken) {
          this.prevPageToken = data.prevPageToken;
        } else {
          this.prevPageToken = null;
        }
        this.resultsLength = data.pageInfo.totalResults;
      }, (error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            this.snackBar.open(
              'An error occurred while requesting from the server. Please check your internet connection or try again later.',
              null,
              { duration: 5000 }
            );
            break;
        }
      });
    this.paginator.firstPage();
    this.currentPageSize = this.paginator.pageSize;
  }
  ngOnInit() {
    this.selection = new SelectionModel<NgxYtdApiSearchResource>(this.opts.selectMultiple, []);
  }

}

const gulp = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');

// Generates a changelog for the latest git tag
gulp.task('changelog', () => {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular',
      // Regenerate everything
      // releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
})
// Cleans the changelog and regenerates it for all tags
gulp.task('clean-changelog', () => {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular',
      releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
})

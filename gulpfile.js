const gulp = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');
const { prompt } = require('inquirer');

// Generates a changelog for the latest git tag
gulp.task('changelog', async () => {
  const { releaseName } = await prompt({
    type: 'text',
    name: 'releaseName',
    message: 'What should be the name for the release?'
  });
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular',
      // Regenerate everything
      // releaseCount: 0
    }, { title: releaseName }))
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

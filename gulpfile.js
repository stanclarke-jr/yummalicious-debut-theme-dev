const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass');

gulp.task('sass', () =>
  gulp.src('scss/global.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('assets'))
);

gulp.task('watch', () => {
  gulp.watch('scss/*.scss', gulp.series('sass'));
  themeKit.command('watch', {
    allowLive: true,
    env: 'development',
  });
});

const gulp = require('gulp');
const minify = require('gulp-minify');
const svgmin = require('gulp-svgmin');

gulp.task('compress', () => {
  return gulp.src('js/main-test.js')
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('svgmin', () => {
  return gulp.src('menu-switcher.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('img'))
})
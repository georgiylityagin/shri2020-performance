const gulp = require('gulp');
const minify = require('gulp-minify');
const svgmin = require('gulp-svgmin');
const htmlmin = require('gulp-htmlmin');

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

gulp.task('html', () => {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
var gulp    = require('gulp');
var md2html = require('gulp-markdown');
var rename  = require('gulp-rename');
var wrap    = require("gulp-wrap");

gulp.task('default', ['html']);
gulp.task('watch', function() {
  gulp.watch('README.md', ['default']);
});

gulp.task('html', function () {
  return gulp.src('README.md')
  .pipe(md2html())
  .pipe(wrap({ src: 'template.html'}))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('.'));
});

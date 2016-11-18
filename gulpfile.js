var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

gulp.task('sass', function(done) {
    gulp.src('scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('www/css'))
    .on('end', done);
});

gulp.task('jshint', function() {
  return gulp.src('www/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass'])
});

gulp.task('default', ['watch']);

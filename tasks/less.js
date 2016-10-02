const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

gulp.task('less', function () {
  return gulp.src([config.static + '/less/**.css',config.static + '/less/**.less', '!' + config.static + '/less/_**.less'])
    .pipe($.less({
      paths: [config.static]
    }))
    .pipe(gulp.dest(config.destPath + '/static/css'));
});
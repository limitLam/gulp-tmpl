const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

gulp.task('watch', function () {
  $.watch([config.template + '/**/**.html',config.dataPath + '**.json'],function(){
  	gulp.start('template');
  });
  $.watch([config.static + '/less/**.css',config.static + '/less/**.less'],function(){
  	gulp.start('css');
  });
  $.watch([config.static + '/js/**.js'],function(){
  	gulp.start('script');
  });
});
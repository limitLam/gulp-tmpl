const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();
const gulpsync = require('gulp-sync')(gulp);

gulp.task('watch', function() {
	$.watch([config.template + '/**/**.html', config.dataPath + '**.json'], function() {
		gulp.start('complie:template');
	});
	$.watch([config.static + '/css/**.css'], function() {
		gulp.start('complie:css');
	});
	$.watch([config.static + '/js/**.js'], function() {
		gulp.start('complie:js');
	});
});

gulp.task('complie:template', gulpsync.sync(['template', 'rev']));
gulp.task('complie:css', gulpsync.sync(['clean:css', ['css', 'template'], 'rev']));
gulp.task('complie:js', gulpsync.sync(['clean:js', ['script', 'template'], 'rev']));

// gulp.task('clean:template', function() {
// 	return gulp.src(config.destPath + '/www')
// 		.pipe($.clean());
// });

gulp.task('clean:css', function() {
	return gulp.src(config.destPath + '/static/css')
		.pipe($.clean());
});

gulp.task('clean:js', function() {
	return gulp.src(config.destPath + '/static/js')
		.pipe($.clean());
});
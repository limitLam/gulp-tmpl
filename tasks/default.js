const gulp = require('gulp');
const config = require('../config.json');
const gulpsync = require('gulp-sync')(gulp);
const $ = require('gulp-load-plugins')();


gulp.task('default', gulpsync.sync([
	'clean', ['template', 'static'], 'rev', 'webserver', 'watch'
]));

gulp.task('clean', function() {
	return gulp.src(config.destPath)
		.pipe($.clean());
});
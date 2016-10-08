const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

//	版本号替换
gulp.task('rev', function() {
	return gulp.src([config.rev + '/**/*.json', config.destPath + '/www/**/*.html'])
		.pipe($.revCollector({
			replaceReved: true
		}))
		.pipe(gulp.dest(config.destPath + '/www'))
		.pipe($.connect.reload())
});
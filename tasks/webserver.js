const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const config = require('../config.json');
gulp.task('webserver', function() {
    $.connect.server({
        name: 'Dist App',
        root: 'dist',
        fallback : 'dist/www/index/index.html',
        livereload: true
    });
});

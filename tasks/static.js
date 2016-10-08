const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

gulp.task('css', function() {

    gulp.src([config.static + '/css/lib/**'])
        .pipe(gulp.dest(config.destPath + '/static/css/lib'));

    return gulp.src([config.static + '/css/**.css', '!' + config.static + '/css/bootstrap.css', '!' + config.static + '/css/bootstrap.css.map'])
        .pipe($.rev())
        .pipe(gulp.dest(config.destPath + '/static/css'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.rev + '/css'));
});

gulp.task('script', function() {
    gulp.src([config.static + '/js/lib/**.js'])
        .pipe(gulp.dest(config.destPath + '/static/js/lib'));

    return gulp.src([config.static + '/js/**.js', '!' + config.static + '/js/lib/**.js'])
        .pipe($.rev())
        .pipe(gulp.dest(config.destPath + '/static/js'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.rev + '/js'));
});
gulp.task('image', function() {
    return gulp.src([config.static + '/images/**.+(png|jpg|gif|svg)', config.static + '/images/**/**.+(png|jpg|gif|svg)'])
        .pipe(gulp.dest(config.destPath + '/static/images'));
});

gulp.task('fonts', function() {
    return gulp.src([config.static + '/fonts/*', ])
        .pipe(gulp.dest(config.destPath + '/static/fonts'));
});

gulp.task('static', ['css', 'script', 'image', 'fonts']);
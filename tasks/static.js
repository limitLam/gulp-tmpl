const gulp = require('gulp');
const config = require('../config.json');

gulp.task('css', function() {
    return gulp.src([config.static + '/css/**.css', config.static + '/css/**.css.map',
            config.static + '/css/**.less', '!' + config.static + '/css/_**.less',
            '!' + config.static + '/css/_**.css', '!' + config.static + '/css/_**.css(.map)'
        ])
        .pipe(gulp.dest(config.destPath + '/static/css'));
});

gulp.task('script', function() {
    return gulp.src([config.static + '/js/**.js', '!' + config.static + '/js/_**.js'])
        .pipe(gulp.dest(config.destPath + '/static/js'));
});

gulp.task('fonts', function() {
    return gulp.src([config.static + '/fonts/*', ])
        .pipe(gulp.dest(config.destPath + '/static/fonts'));
});

gulp.task('static', ['css', 'script', 'fonts']);

'use strict'
const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

const utils = require('../config/utils');
const getJson = utils.getJson;
// 模板
gulp.task('template', ['clean:template'], function() {
    // console.log(aliasConfig);
    const TmplBaseConfig = require('../nunjucks/base.json'); // 基础数据，版本号等

    getJson('nunjucks/items.json', function(data) {
        const TmplItems = data.items;
        // 遍历items
        TmplItems.map(function(item, index) {
            function getData() {
                return Object.assign({}, TmplBaseConfig, item);
            }
            gulp.src([config.template + '/item/_index.html'])
                .pipe($.data(getData)) //  数据合并
                .pipe($.nunjucksRender({
                    path: [config.template]
                }))
                .pipe($.prettify({ indent_size: 2 }))
                .pipe($.rename('item/' + item.id + '.html'))
                .pipe(gulp.dest(config.destPath + '/www'))
        });
    });

    gulp.src([config.template + '/**/**.html', '!' + config.template + '/**/_**.html', '!' + config.template + '/_**/*.html'])
        .pipe($.nunjucksRender({
            path: [config.template],
            data: TmplBaseConfig
        }))
        .pipe($.prettify({ indent_size: 2 }))
        .pipe(gulp.dest(config.destPath + '/www'))

});

gulp.task('clean:template', function() {
    return gulp.src(config.destPath + '/www')
        .pipe($.clean());
});

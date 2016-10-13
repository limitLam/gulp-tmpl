'use strict'
const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

const utils = require('../config/utils');
const getJson = utils.getJson;
// 模板
gulp.task('template', function() {
    const TmplBaseConfig = getJson('nunjucks/base.json'); //基础数据，版本号等

    let itemData = getJson('nunjucks/items.json');
    const TmplItems = itemData.items;
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
            .pipe($.prettify({
                indent_size: 2
            }))
            .pipe($.rename('item/' + item.id + '.html'))
            .pipe(gulp.dest(config.destPath))
    });

    return gulp.src([config.template + '/**/**.html', '!' + config.template + '/**/_**.html', '!' + config.template + '/_**/*.html'])
        .pipe($.nunjucksRender({
            path: [config.template],
            data: TmplBaseConfig
        }))
        .pipe($.prettify({
            indent_size: 2
        }))
        .pipe(gulp.dest(config.destPath))

});
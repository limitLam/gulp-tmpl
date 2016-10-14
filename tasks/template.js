'use strict'
const gulp = require('gulp');
const config = require('../config.json');
const $ = require('gulp-load-plugins')();

const utils = require('../config/utils');
const getJson = utils.getJson;
// 模板
gulp.task('template', function() {
    const TmplBaseConfig = getJson('nunjucks/base.json'); //基础数据，版本号等

    //  以下考虑可读性问题，暂时不改造
    let getBaseData = function(){
        return Object.assign({},TmplBaseConfig);
    }
    //  catalog
    let catalogData = getJson('nunjucks/catalogs.json');
    const TmplCatalogs = catalogData.catalogs;

    //  遍历catalogs
    TmplCatalogs.map(function(catalog, index){
        function getData() {
            var baseData = getBaseData();
            return Object.assign(baseData, catalog);
        }
        gulp.src([config.template + '/catalog/_index.html'])
            .pipe($.data(getData)) //  数据合并
            .pipe($.nunjucksRender({
                path: [config.template]
            }))
            .pipe($.prettify({
                indent_size: 2
            }))
            .pipe($.rename('catalog/' + catalog.name + '.html'))
            .pipe(gulp.dest(config.destPath))
    });

    //  item
    let itemData = getJson('nunjucks/items.json');
    const TmplItems = itemData.items;

    // 遍历items
    TmplItems.map(function(item, index) {
        function getData() {
            var baseData = getBaseData();
            return Object.assign(baseData, item);
        }
        gulp.src([config.template + '/item/_index.html'])
            .pipe($.data(getData)) //  数据合并
            .pipe($.nunjucksRender({
                path: [config.template]
            }))
            .pipe($.prettify({
                indent_size: 2
            }))
            .pipe($.rename('item/' + item.class + '/' + item.name + '.html'))
            .pipe(gulp.dest(config.destPath))
    });

    //  profile
    let profileData = getJson('nunjucks/profiles.json');
    const TmpProfiles = profileData.profiles;

    // 遍历items
    TmpProfiles.map(function(profile, index) {
        function getData() {
            var baseData = getBaseData();
            return Object.assign(baseData, profile);
        }
        gulp.src([config.template + '/profile/_index.html'])
            .pipe($.data(getData)) //  数据合并
            .pipe($.nunjucksRender({
                path: [config.template]
            }))
            .pipe($.prettify({
                indent_size: 2
            }))
            .pipe($.rename('profile/' + profile.id + '.html'))
            .pipe(gulp.dest(config.destPath))
    });

    //  其他无数据页面
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
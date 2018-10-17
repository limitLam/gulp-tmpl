const gulp = require('gulp');

const config = require('../config.json');
const $ = require('gulp-load-plugins')();

// http server
const browserSync = require('browser-sync').create();

// http proxy
const httpProxy = require('http-proxy-middleware');

const getIPAddress = require('../config/getIPAddress');

//	版本号替换
gulp.task('rev', function() {
	return gulp.src([config.rev + '/**/*.json', config.destPath + '/**/*.html'])
		.pipe($.revCollector({
			replaceReved: true
		}))
		.pipe(gulp.dest(config.destPath))
		.pipe(browserSync.reload({ stream: true }))
});

//	服务器启动
gulp.task('webserver', function() {
	// 启用代理，将 js 中的 ajax 路径代理到 mock 服务器
	// 代理所有以`/api/`开头的请求
	var jsonProxy = httpProxy('/api/', {
		target: 'http://192.168.8.160:20160', // mock 服务器
		changeOrigin: true,
		pathRewrite: {
			'/api': ''
		},
		logLevel: 'debug'
	})

	// 启动 http
	browserSync.init({
		// 界面管理工具
		ui: {
			port: 8080,
			weinre: { // weinre工具移动设备代理端口
				port: 9090
			}
		},
		server: {
			// 目录都作为根目录访问
			baseDir: [config.destPath],
			directory: true,
			// routes: {
			// 	'/bower_components': './bower_components'
			// }
		},
		//proxy: 'http://192.168.8.160:20160',
		host: getIPAddress(),
		port: config.port,
		// 使用浏览器打开
		// 可以自定义配置
		//   browser: ['chrome', 'firefox', 'Internet Explore']
		// 只启动 chrome 开发
		browser: ['chrome'],
		// 管理代理
		middleware: [jsonProxy]
	})
});
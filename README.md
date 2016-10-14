# gulp-tmpl
纯静态可集静态数据的模板

## 下载项目
```
git clone  https://github.com/limitLam/gulp-tmpl.git
```

## 安装node插件
```
切换到cnpm速度更快一些

npm config set registry https://registry.npm.taobao.org

npm install
```

## 启动项目
```
npm start
```

## 目录结构
```
config						#配置方法
	|--getIPAddress.js		#获取本地IP的方法
	|--utils.js				#一些特殊的公用方法
nunjucks					#静态模板nunjucks调用的静态数据
	|--base.json			#基本配置数据
	|--catalogs.json		#分类数据
	|--items.json			#商品数据
	|--profiles.json		#文案数据
src 						#项目源码目录
	|--static				#静态资源目录
		|--css				#样式目录
			|--lib			#不更换版本号的样式资源目录(如bootstrap.css)
		|--fonts			#字体目录
		|--images			#图片目录
		|--js				#脚本目录
			|--lib			#不更换版本号的脚本资源目录(如bootstrap.js,jquery.js)
	|--template				#模板目录
		|--_components		#公用组件模板目录
		|--_layout			#整体布局模板目录
		|--catalog			#分类模板目录
		|--index			#首页模板目录
		|--item				#商品模板目录
		|--profile			#文案模板目录
tasks						#gulp任务目录
.gitignore 					#git的配置文件，配置不上传到git的文件
config.json 				#基础配置数据文件
gulpfile.js 				#gulp配置文件
package.json 				#项目信息文件，包括npm包
README.md 					#markdown说明文档

```






<!-- <meta http-equiv="refresh" content="2"> 这个用来作弊刷新md预览-->

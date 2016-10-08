const fs = require('fs');

// 同步获取json,用于避免require缓存
const getJson = function(url, callBack) {
	var data = JSON.parse(fs.readFileSync(url));
	return data;
}

module.exports = {
	getJson: getJson
}
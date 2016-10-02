const fs = require('fs');

const getJson = function(url, callBack) {
    fs.readFile(url, function(err, data) {
        if (err) {
            throw err; }

        var data = JSON.parse(data);

        callBack(data);
    });
}

module.exports = {
	getJson : getJson
}
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

fs.readFileAsync('res/test.json')
    .then(function(results) {
        console.log(JSON.parse(results));
    })
    .catch(function(err) {
        console.log(err);
    });

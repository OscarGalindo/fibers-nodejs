var fs = require('fs');

fs.readFile('res/test.json', function(err, results) {
    if(err) {
        console.log(err);
    }

    console.log(JSON.parse(results));
});

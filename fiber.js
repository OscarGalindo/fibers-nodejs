var wait = require('wait.for');
var fs = require('fs');

wait.launchFiber(function() {
    try {
        console.log('Start fiber');
        var results = wait.for(fs.readFile, 'res/test.json');
        console.log(JSON.parse(results));
    } catch(e) {
        console.log(e);
    }
});

console.log('Back in main');

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((req, res) => {
    var _url = req.url;
    var query_string = url.parse(_url, true);

    res.writeHead(200);
    res.write(fs.readFileSync(__dirname + '/index.html'));
    res.end();
});

app.listen(8080);
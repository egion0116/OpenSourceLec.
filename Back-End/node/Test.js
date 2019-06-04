var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((req, res) => {
    var _url = req.url;
    var query_string = url.parse(_url, true);

    fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.write(data);
    })

    res.writeHead(200);
    res.end();
});

app.listen(8080);
var http = require('http');
var fs = require('fs');
var url = require('url');
var R = require('r-script');

// 루트에 대한 문서 불러오기
function main_root(req, res){
    var template = fs.readFileSync('./index2.html', 'utf8');

    res.writeHead(200, {'Context-Type':'text/html'});
    res.end(template);
}

// CSS 불러오기
function css(req, res){
    var css = fs.readFileSync('./index.css', 'utf8');

    res.writeHead(200, {'Content-Type':'text/css'});
    res.end(css);
}

// Javascript 불러오기
function script(req, res){
    var mapBasic = fs.readFileSync('./mapBasic.js', 'utf8');
        
    res.writeHead(200, {'Content-Type':'text/javascript'});
    res.end(mapBasic);
}

// 서버 콜벡 로직
var app = http.createServer((req, res) => {
    var _url = req.url;

    if (_url === '/')
    {
        main_root(req, res);
    }
    if (_url === '/index.css'){
        css(req, res);
    }
    if (_url === '/mapBasic.js')
    {
        script(req, res);
    }

    res.writeHead(200);
    res.end();
});

app.listen(8080);
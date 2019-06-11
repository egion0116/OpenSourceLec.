var http = require('http');
var fs = require('fs');
var PosJson = require('./MapAPI/PosJson');
var Data = require('./MapAPI/Data');

// 루트에 대한 문서 불러오기
function main_root(req, res){
    var template = fs.readFileSync('./index2.html', 'utf8');

    res.writeHead(200, {'Context-Type':'text/html'});
    res.end(template);
}

// CSS 불러오기
function css(req, res, targ){
    var css = fs.readFileSync('.' + targ, 'utf8');

    res.writeHead(200, {'Content-Type':'text/css'});
    res.end(css);
}

// Javascript 불러오기
function map_script(req, res, targ){
    var script_code = fs.readFileSync('.' + targ, 'utf8');
        
    res.writeHead(200, {'Content-Type':'text/javascript'});
    res.end(script_code);
}

// 서버 콜벡 로직
var app = http.createServer(async function(req, res){
    var _url = req.url;

    if (_url === '/')
    {
        main_root(req, res);
    }
    if (_url === '/index.css'){
        css(req, res, _url);
    }
    if (_url === '/MapAPI/mapBasic.js')
    {
        map_script(req, res, _url);
    }
    if (_url === '/MapAPI/Marker.js')
    {
        var script_code = fs.readFileSync('.' + _url, 'utf8');
        var Location = await PosJson.AllPosToJson();
        
        res.writeHead(200, {'Content-Type':'text/javascript'});
        res.write(`Location = ${Location};`);
        res.end(script_code);
    }
    if (_url === '/MapAPI/MapPrac.js')
    {
        map_script(req, res, _url);
    }

    res.writeHead(404);
    res.end();
});

app.listen(8080);
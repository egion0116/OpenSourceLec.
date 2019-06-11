var http = require('http');
var fs = require('fs');
var PosJson = require('./MapJs/PosJson');

// 루트에 대한 문서 불러오기
function main_root(req, res){
    var template = fs.readFileSync('5team.html', 'utf8');

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
function _script(req, res, targ){
    var script_code = fs.readFileSync('.' + targ, 'utf8');
        
    res.writeHead(200, {'Content-Type':'text/javascript'});
    res.end(script_code);
}

// Image 불러오기
function img(req, res, targ){
    var img = fs.readFileSync('.' + targ);
    
    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
}

// 서버 콜벡 로직
var app = http.createServer(async function(req, res){
    var _url = req.url;

    if (_url === '/' || _url === '/index.html')
    {
        main_root(req, res);
    }
    if (_url === '/MapJs/Marker.js')
    {
        var script_code = fs.readFileSync('.' + _url, 'utf8');
        var Location = await PosJson.AllPosToJson();
        
        res.writeHead(200, {'Content-Type':'text/javascript'});
        res.write(`Location = ${Location};`);
        res.end(script_code);
    }
    if (_url.split('/')[1] === 'assets')
    {
        if (_url.split('/')[2] === 'css')
        {
            
            css(req,res,_url);
        }
        if (_url.split('/')[2] === 'js')
        {
            _script(req,res,_url);
        }
    }
    if (_url.split('/')[1] === 'images')
    {
        img(req, res, _url);
    }

    res.writeHead(404);
    res.end();
});

app.listen(8080);
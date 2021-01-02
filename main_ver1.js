var http = require('http');
var fs = require('fs');
var url = require('url')

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; //bring the url id value
    console.log(queryData.id); //showing the url id value
    console.log(_url);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id); //read that url, and bring the right file.
});

app.listen(3000);

// In this file. I can bring/parse the id value of url. and I can print that value.
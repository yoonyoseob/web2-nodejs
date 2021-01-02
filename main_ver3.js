var http = require('http');
var fs = require('fs');
var url = require('url')
fs.readFile('sample.txt', 'utf8', function(err, data) {
    var text = data;
    console.log(data);
});

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; //bring the url id value
    console.log(queryData.id); //showing the url id value
    var title = queryData.id;
    console.log(_url);
    var text;
    
    if(_url == '/'){
        title = 'welcome';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,discription){
        var template = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Favorite Dictionary - ${title}</title>
                <meta charset="utf-8">
            </head>
    
            <body>
                <h1><a href="/">my favourite</a></h1>
                <ol>
                    <li><a href = "/?id=Harrypotter">Harrypotter</a></li>
                    <li><a href = "/?id=Manchester United">Manchester United</a></li>
                    <li><a href = "/?id=Hacking">hacking</a></li>
                </ol>
                <h1>${title}</h1>
    
                <p>${discription}</p>
            </body>
        </html>
        `;
        response.end(template); //read that url, and bring the right file.
    })

});

app.listen(3000);

// In this file. I can bring/parse the id value of url. and I can print that value.

//In this version, I don't have to reload the file when I changed somethings in ***data file***. because, javascript already read my new html file.
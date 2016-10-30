var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    if (pathname.indexOf('.html') != -1) {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
            }
            response.end();
        });
    };
    if (pathname.indexOf('.js') != -1) {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, {'Content-Type': 'text/javascript'});
                response.write(data.toString());
            }
            response.end();
        });
    };
    if (pathname.indexOf('.css') != -1) {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(data.toString());
            };
            response.end();
        });
    };
    if (pathname.indexOf('.jpg') != -1) {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, {'Content-Type': 'image/jpeg'});
                response.write(data.toString());
            };
            response.end();
        });
    };
}).listen(3000);
console.log('Server running on localhost:3000...');

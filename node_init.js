var http = require('http');
var fs = require('fs');

// const express = require('express');
// const app = express();
// app.use(express.static('./'));

http.createServer(function (req, res) {
    let path = "phasmo.html";
    if(req.url != "/") {
        path = req.url.substring(1, req.url.length);
    }
    fs.readFile(path, function (err, data) {
        if(data === undefined) {
            return res.end();
        }
        if(path.endsWith(".js")) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
        } else if(path.endsWith(".css")) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
        }
        res.write(data);
        return res.end();
    });
}).listen(process.env.PORT || 5000);
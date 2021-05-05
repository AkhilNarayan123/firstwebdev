var express = require('express');
var app = express();

console.log(__dirname)
app.get('/google', function(req, res){
    res.sendFile(__dirname+ '/google.html');
})

app.get('/', function(req, res){
    res.sendFile(__dirname+ '/apple.html');
})

app.get('/resume', function(req, res){
    res.sendFile(__dirname+ '/resume.html');
})

app.get('/', function(req, res){
    res.sendFile(__dirname+ '/resume.html');
})

app.use(express.static(__dirname));

var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});
var express = require('express');
var app = express();

console.log(__dirname)
app.get('/', function(req, res){
    res.sendFile(__dirname+ '/google.html');
    
})

app.use(express.static(__dirname));

var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});
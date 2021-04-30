var express = require('express');
var app = express();

console.log(__dirname)
app.get('/', function(req, res){
    res.sendFile(__dirname+ '/resume.html');
    
})

app.use(express.static(__dirname));

var port= process.env.PORT  || 3000;
app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
});
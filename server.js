var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res){
   res.sendFile(__dirname+ '/frontend/html/resume.html'); 
})

app.use(express.static(__dirname+'/frontend'));
app.get('/:page', function(req, res){
    var ext = path.extname(req.params.page);
    // console.log(ext);
    if(ext=="")
    res.sendFile(__dirname+ '/frontend/html/'+ req.params.page+".html");
    //else  res.sendFile(__dirname+ '/frontend/'+ req.params.page);
})


// app.get('/resume', function(req, res){
//     res.sendFile(__dirname+ '/resume.html');
// })

// app.get('/', function(req, res){
//     res.sendFile(__dirname+ '/resume.html');
// })


var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});
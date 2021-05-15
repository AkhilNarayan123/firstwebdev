var express = require('express');
var app = express();
//const bodyParser = require("body-parser");
var path = require('path');
var todo= require('./backend/todo');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.get('/', function(req, res){
   res.sendFile(__dirname+ '/frontend/html/resume.html'); 
})

app.use(express.static(__dirname+'/frontend'));
app.use('/api',todo);

app.get('/:page', function(req, res){
    var ext = path.extname(req.params.page);
    // console.log(ext);
    if(ext=="")
    res.sendFile(__dirname+ '/frontend/html/'+ req.params.page+".html");
    //else  res.sendFile(__dirname+ '/frontend/'+ req.params.page);
})




var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});
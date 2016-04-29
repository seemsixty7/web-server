var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public')); //exposes entire directory

app.listen(PORT, function (){
    console.log('Server is running on port:' + PORT);
});

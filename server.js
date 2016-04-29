var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function(req,res, next){
        //var timestamp = new Date().toString();
        console.log('Request:[' + new Date().toString() + ']: ' + req.method + ' ' + req.originalUrl);
        next();
    } 
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public')); //exposes entire directory

app.listen(PORT, function (){
    console.log('Server is running on port:' + PORT);
});

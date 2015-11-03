var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV  = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname +'/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname +'/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));

if(env === 'development'){
    mongoose.connect('mongodb://localhost/fantasyhelper');
}
else{
    mongoose.connect('mongodb://suneets:C1earstone@ds052408.mongolab.com:52408/syrah');
}


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error....'));
db.once('open', function callback(){
    console.log('Hello from Mongodb')
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

var messageSchemea = mongoose.Schema({message: String});
app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' +req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port '+ port + '....');
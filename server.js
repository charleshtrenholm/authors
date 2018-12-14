var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public/dist/public"));
require('./server/config/routes')(app);
app.use(bodyParser.json());

app.listen(6789, function(){
    console.log('listening on port 6789');
})
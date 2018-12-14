var authors = require('../controllers/authors');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app){
    app.use(bodyParser.json())
    app.post('/api/authors/', function(req, res){
        authors.create(req, res);
    })
    app.get('/api/authors', function(req, res){
        authors.getAll(req, res);
    })
    app.put('/api/authors/:id', function(req, res){
        authors.edit(req, res);
    })

    app.get('/api/authors/:id', function(req, res){
        authors.getOne(req, res);
    })

    app.delete('/api/authors/:id', function(req, res){
        authors.delete(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}
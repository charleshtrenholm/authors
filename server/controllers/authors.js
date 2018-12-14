var Author = require('../models/author').Author;
var bodyParser = require('body-parser');

module.exports = {
    getAll: function(req, res){
        Author.find({}, function(err, data){
            if(err){
                console.log(err);
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },
    getOne: function(req, res){
        Author.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log(err);
                res.json({err: "We couldnt find you in our system"})
            } else {
                res.json(data);
            }
        })
    },
    create: function(req, res){
        var author = new Author;
        author.name = req.body.name;
        author.save(function(err){
            if(err){
                console.log(err);
                res.json({err: err})
            } else {
                res.send({message: "SHREKCESS"});
            }
        })
    },
    edit: function(req, res){
        Author.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}, function(err, data){
            if(err){
                console.log(err);
                res.json({err: "YOU HAVE AN ERROR"})
            } else {
                res.json(data);
            }
        })
    },
    delete: function(req, res){
        Author.deleteOne({_id: req.params.id}, function(err){
            if(err) console.log(err)
            else res.json({message: "Success"})
        })
    }
}
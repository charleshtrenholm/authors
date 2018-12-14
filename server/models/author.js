var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect('mongodb://localhost/author');

var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name SH0uld be between {ARGS[0]} and {ARGS[1]} characters'
    })
]

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, validate: nameValidator}
})
mongoose.model("Author", AuthorSchema);

module.exports = {
    Author: mongoose.model("Author")
}
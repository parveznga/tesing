var mongoose = require('mongoose');

var userData = mongoose.Schema({
    name : {type : String, require: true},
    roll : {type : Number, unique : true}
},{timestamps : true})

module.exports = mongoose.model('user', userData);
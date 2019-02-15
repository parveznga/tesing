var mongoose = require('mongoose');
var db_url = 'mongodb://127.0.0.1:27017/demo_db';
var db = mongoose.connect(db_url, {useNewUrlParser : true});
if(db) {
    console.log('connected to database');
}
 module.exports = db;

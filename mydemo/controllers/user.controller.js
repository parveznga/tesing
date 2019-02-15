var db = require('../db_config/db_connect');
var User = require('../models/user.schema');

exports.testData = (req, res,next) => {
   
  setTimeout(function () {
    
    var error = new Error("BROKEN");
        console.log(error)
   
  }, 100);
};

exports.AddtestData = (req, res) => {
    var user = new User({
        name : req.body.name,
        roll : req.body.roll
    });
    user.save(function(err, response) {
        if (err) throw err;
        console.log("Data Inserted");
        res.send(response);
    })
}
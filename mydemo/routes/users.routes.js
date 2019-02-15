var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user.controller');
/* GET users listing. */
router.get('/test',[user_controller.testData]);
router.post('/add_test_data',[user_controller.AddtestData]);
module.exports = router;

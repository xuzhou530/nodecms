var express = require('express');
var router = express.Router();
var userController = require('../business/controller/userController');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/hello',userController.addUserAction());

module.exports = router;

var user = require('../models/user');

exports.addUser = function(conditions,commonDao,callback){
    var userModel = user.getModel();
    commonDao.addData(userModel,conditions,function(result){
        callback(result);
    });
};
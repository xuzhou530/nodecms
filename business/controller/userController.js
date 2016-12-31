var commonDao = require('../common/commonDao');
var userDao = require('../dao/userDao');

exports.addUserAction = function(){
    return function(req,res){
        var user = new Array();
        for(var i=0;i<10;i++){
            user.push({
                _id   : new global.mongoose.Types.ObjectId(),
                userName  : "user"+(i+1)
            });
        }

        userDao.addUser(user,commonDao,function(result){
            res.json(result);
        });
    }
};
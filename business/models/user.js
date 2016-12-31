var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    userName : {type:String}
});

module.exports = {
    getModel : function(){
        return global.db.model('user',userSchema);
    }
};

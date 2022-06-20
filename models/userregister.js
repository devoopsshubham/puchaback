var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var loginSchema=new Schema({
    email:{
        type:String,
        unique:true
    },

    MobileNo:{
        type:Number,
        unique:true

    },
    username:String,
    password:String,
    cur_date:{
        type:Date,
        default:Date.now()
    }

})
exports.signUser = mongoose.model('signUser', loginSchema);
exports.signSchema = loginSchema;
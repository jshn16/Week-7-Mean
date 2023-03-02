const mongoose = require('mongoose');

const plm=require('passport-local-mongoose');
const userSchema = new mongoose.Schema({

    username: { type: String },
    password: { type: String }


})
//converting this model to inherits abilties of user management 
userSchema.plugin(plm);
module.exports=mongoose.model('User', userSchema);
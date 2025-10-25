const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uname:String,
    passwd:String,
    phonez:String
});

module.exports = mongoose.model('UserDB', userSchema , 'user-table');
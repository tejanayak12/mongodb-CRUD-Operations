const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : 'String',
    email : "String",
    isActive : 'Boolean'
})

const User = mongoose.model('User' , UserSchema);

module.exports = User;
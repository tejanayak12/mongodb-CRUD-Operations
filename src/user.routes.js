const express = require('express');
const userrouter = express.Router();
const Controller = require('../src/controllers/user.controller.js');


userrouter.get('/' , (req , res) => {
    return Controller.getAllUsers(req , res)
})
userrouter.post('/' , Controller.CreateUser);
userrouter.put('/' , Controller.UpdateUser);
userrouter.delete('/' , Controller.deleteUser);

module.exports = userrouter;
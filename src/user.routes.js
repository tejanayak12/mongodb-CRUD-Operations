const express = require('express');
const userrouter = express.Router();


userrouter.get('/' , (req, res) => res.send('user get response...'));
userrouter.post('/' , (req,res) => res.send(" user post response..."));
userrouter.put('/' , (req,res) => res.send(" user put response..."));
userrouter.delete('/' , (req,res) => res.send(" user delete response..."));

module.exports = userrouter;
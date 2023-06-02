const express = require('express');
const userProfilerouter = express.Router();


userProfilerouter.get('/' , (req, res) => res.send('user get response...'));
userProfilerouter.post('/' , (req,res) => res.send(" user post response..."));
userProfilerouter.put('/' , (req,res) => res.send(" user put response..."));
userProfilerouter.delete('/' , (req,res) => res.send(" user delete response..."));

module.exports = userProfilerouter;
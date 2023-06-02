const User = require('../models//user.model.js');

function getAllUsers(req , res){
    User.find({})
    .then(rows => res.json(rows))
    .catch(error => res.json({status : 'fail' , message : "cannot get details...."}))
};

function getUserDatails (req , res) {
    const id = req.params.userId
    User
    .findById(id)
    .then(row => {
        if(!row){
            return res.json({status : "fail" , message : `couldn't find data on id : ${id}`})
        }
        res.json(row)
    })
    .catch(error => res.json({status : "fail"}))
}

function CreateUser(req , res){
    return res.send("Post Create User")
}

function UpdateUser(req, res){
    return res.send('put to update user')
}

function deleteUser(req , res) {
    return res.send('delete to delete user')
}

module.exports = {
    getAllUsers,
    CreateUser,
    UpdateUser,
    deleteUser,
    getUserDatails
};


function getAllUsers(req , res){
    return res.send("Get All Users API")
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
    deleteUser
};


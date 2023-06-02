const express = require('express');
const app = express();
const userrouter = require('./src/user.routes.js');
const userProfilerouter = require('./src/userProfile.routes.js');
const db = require('./src/db.js');
db.dbInstilizer();

app.use('/users' , userrouter)
app.use('/profile' , userProfilerouter)
/*app.get('/user')
app.post("/user")
app.put("/user")
app.delete("/user")
*/

app.listen(2500 , () => {
    console.log('Server is Running....')
})
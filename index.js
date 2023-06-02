const express = require('express');
const app = express();
const userrouter = require('./src/user.routes.js');
const userProfilerouter = require('./src/userProfile.routes.js');


app.use('/user' , userrouter)
app.use('/profile' , userProfilerouter)
/*app.get('/user')
app.post("/user")
app.put("/user")
app.delete("/user")
*/

app.listen(2500 , () => {
    console.log('Server is Running....')
})
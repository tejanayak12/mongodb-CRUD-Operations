const express = require('express');
const app = express();

app.get("/" , (req , res) => {
    res.send({
        status : 'Ok',
        message : 'Api Was Working Good...'
    })
})

app.post('/regesiter', (req,res) => {
    const user = req.body
    res.json({
        message : 'ok',
        data : user
    })
})

app.listen(2500 , () => {
    console.log('Server is Running....')
})
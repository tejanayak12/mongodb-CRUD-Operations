const mongoose = require('mongoose');

function dbInstilizer () {
mongoose
.connect(`mongodb://localhost:27017/Mern`)
.then(() => {
    console.log('Mongodb Connected...')
}).catch(error => console.error(error))

}

module.exports = {
    dbInstilizer
}
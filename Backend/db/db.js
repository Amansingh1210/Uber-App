const mongoose = require('mongoose');


// Connect to MongoDB

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
            console.log('Connected to MongoDB');
        }).catch(error => console.log(error));
}


module.exports = connectToDb;
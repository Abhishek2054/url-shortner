module.exports = {
    MongoURI: "mongodb://temp:temptemp@projects.7ht6dnv.mongodb.net/AuthJs?retryWrites=true&w=majority"
}

// // mongodb://127.0.0.1:27017/codeial

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://temp:temptemp@projects.7ht6dnv.mongodb.net/AuthJs?retryWrites=true&w=majority');

const db = mongoose.connection;
db.once('open',function(){
    console.log("Connected to DB");
});
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


module.exports = db;

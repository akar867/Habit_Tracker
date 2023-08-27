const mongoose = require('mongoose');

// storing the db on mongo atlas


// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose.connect('mongodb://127.0.0.1:27017/habit_tracker').then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

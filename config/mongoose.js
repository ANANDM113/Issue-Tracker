const mongoose  =   require('mongoose');

// mongoose.connect(`mongodb://127.0.0.1/issueTrackerDB`);

mongoose.connect(`mongodb+srv://issueTracker:goB0ZovAJdXqRBVd@issuetracker.x8jnroh.mongodb.net/`);

const db    =   mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports  =   db;
const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/yelp-camp';
    
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected')
});

// Models
require('./Category');
require('./Recipe');
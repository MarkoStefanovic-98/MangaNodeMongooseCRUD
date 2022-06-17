const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mangadb', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB connection réussi.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./manga.model');
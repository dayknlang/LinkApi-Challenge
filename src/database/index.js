const mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/testeBack', { useMongoClient: true } );
mongoose.Promise = global.Promise;

module.exports = mongoose;
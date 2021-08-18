const mongoose = require('mongoose');

// use Mongoose for all of its MongoDB data handling
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/surviving-cbc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
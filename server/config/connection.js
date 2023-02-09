const mongoose = require('mongoose');

//was mongodb://localhost/googlebooks
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;

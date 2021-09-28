const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
//console.log('uri', db);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {});
    console.log('Mongo db connected...');
  } catch (error) {
    console.error('error connecting db', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

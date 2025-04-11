const mongoose = require("mongoose");

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
mongoose.connect(
  "mongodb+srv://roopareddy:password1234@cluster0.gaxh4xl.mongodb.net/Book?retryWrites=true&w=majority&appName=Cluster0"
);
module.exports = mongoose.connection;

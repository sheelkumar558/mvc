const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sheelu:Sheelu_123@cluster0.vp8ij.mongodb.net/mvc?retryWrites=true&w=majority"
  );
};

module.exports = connect;

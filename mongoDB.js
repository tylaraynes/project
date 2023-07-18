const mongoose = require("mongoose");
let DB_URL = MONGODB_URI;

module.exports = async function connection() {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
      },
      (error) => {
        if (error) return new Error("Connection Failed");
        console.log("mongoDB connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
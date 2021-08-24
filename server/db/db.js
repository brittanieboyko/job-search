const mongoose = require("mongoose");
const connection = process.env.MONGODB_URI || "mongodb://localhost/3001";

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

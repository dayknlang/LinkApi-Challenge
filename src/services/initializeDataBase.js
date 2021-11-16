const mongoose = require("mongoose");
require("dotenv").config();

function connectDatabase() {
  mongoose.connect(process.env.DBCONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const mongoUrlDb = mongoose.connection;
  mongoUrlDb.on("error", (error) => console.error(error));
  mongoUrlDb.once("open", () =>
    console.log("Database connected successfully!")
  );
}

module.exports = connectDatabase;

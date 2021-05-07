const mongoose = require("mongoose");

const dbserver = process.env.MONGOD_URI || "mongodb://localhost/lifedash_db";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbserver, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`DB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.err(err);
    process.exit(1);
  }
};

module.exports = connectDB;

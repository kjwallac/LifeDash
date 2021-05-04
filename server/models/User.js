const { Schema, model } = require("mongoose");

// UserSchema still needs username, password and email Validators
// Will add later

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: "Please enter your name",
      index: true,
    },
    // Until OAuth is in then delete this and use hash and salt
    password: {
      type: String,
      trim: true,
      required: "Please enter a password",
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: "Please enter your email",
      index: true,
    },
    // To wait for OAuth to be implemented
    // hash: String,
    // salt: String,
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;

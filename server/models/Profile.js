const { Schema, model } = require("mongoose");

// Profile / maybe change name to something
const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bornDate: {
      type: Date,
      required: true,
    },
    deathDate: {
      type: Date,
      required: true,
    },
    quote: {
      type: String,
    },
    socialLinks: {
      type: String,
    },
    images: {
      type: String,
    },
    bio: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model("Profile", ProfileSchema);

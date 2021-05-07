const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
    profileImage: {
      type: String,
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
    status: {
      type: String,
      default: "public",
      enum: ["public", "private"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model("Profile", ProfileSchema);

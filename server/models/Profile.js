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
      type: Number,
      required: true,
      min: 0500,
      max: 9999,
    },
    deathDate: {
      type: Number,
      required: true,
      min: 0500,
      max: 9999,
      validate: [
        checkDate,
        "Death year must be greater than or equal to the born year",
      ],
    },
    profileImage: {
      type: String,
    },
    quote: {
      type: String,
    },
    socialLinks: {
      type: [String],
    },
    images: {
      type: [String],
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
    qrCode: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

function checkDate(value) {
  return this.bornDate <= value;
}

module.exports = model("Profile", ProfileSchema);

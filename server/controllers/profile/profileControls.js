const { Profile } = require("../../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      const profile = await Profile.find({}).sort({ date: -1 });
      res.status(200).json(profile);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async ({ params }, res) => {
    try {
      const profile = await Profile.findById(params.id);
      res.status(200).json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  findProfilesByUserId: async (req, res) => {
    try {
      const userProfiles = await Profile.find({ user: req.params.id });
      res.status(200).json(userProfiles);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  create: async ({ body }, res) => {
    try {
      const newProfile = await Profile.create(body);
      res.status(200).json(newProfile);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  update: async ({ params, body }, res) => {
    try {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: params.id },
        body
      );
      res.status(200).json(updatedProfile);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  remove: async ({ params }, res) => {
    try {
      const profile = await Profile.findById({ _id: params.id });
      await profile.remove();
      res.status(200).json("Profile Removed");
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
};

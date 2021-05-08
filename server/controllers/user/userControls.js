const { User } = require("../../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      const user = await User.find({}).sort({ date: -1 });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async ({ params }, res) => {
    try {
      const user = await User.findById(params.id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  create: async ({ body }, res) => {
    try {
      const newUser = await User.create(body);
      res.status(200).json(newUser);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  update: async ({ params, body }, res) => {
    try {
      const user = await User.findOneAndUpdate({ _id: params.id }, body);
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  remove: async ({ params }, res) => {
    try {
      const user = await findById({ _id: params.id });
      await user.remove();
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
};

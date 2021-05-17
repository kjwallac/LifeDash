const { User } = require("../../models");
const bcrypt = require("bcrypt");

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
  findById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      req.session.name = user.displayName;
      req.session.userID = user._id;
      req.session.save();
      console.log(req.session.name);
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ msg: "Cannot find user" });
      } else if (await bcrypt.compare(req.body.password, user.password)) {
        // Storing in session
        req.session.name = user.displayName;
        req.session.userID = user._id;
        res.status(200).json(user);
      } else {
        res.status(400).json({ msg: "Wrong credentials or does not exist" });
      }
    } catch (err) {
      console.log(err);
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

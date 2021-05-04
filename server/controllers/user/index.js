const router = require("express").Router();
const { User } = require("../../models");

// Gets a list of users
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    console.log(req);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Creates a new user
router.post("/create", async ({ body }, res) => {
  try {
    const user = await User.create(body);
    console.log(user);

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// WORK IN PROGRESS ///////////////////////////////////
router.put("/update", async (req, res) => {
  try {
    // get id through params
    // update item
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    // get id through params
    // delete item
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { Profile } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find({});
    console.log(profile);
    res.status(200).send("Profile Routes Here");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log("POST: Create Profile");
    res.send("Create profile");
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;

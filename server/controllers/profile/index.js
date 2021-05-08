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

// work in progress /////////////////////
router.get("/:id", async (req, res) => {
  try {
    console.log("Getting id params");
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Server Error");
  }
});

router.post("/create", async ({ body }, res) => {
  try {
    const newProfile = await Profile.create(body);
    res.status(200).json(newProfile);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;

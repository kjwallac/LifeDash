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

// testing for now, nothing going to saving into atlas
router.post("/create", async ({ body }, res) => {
  try {
    const {
      firstName,
      lastName,
      bornDate,
      deathDate,
      quote,
      socialLinks,
      images,
      bio,
      status,
    } = body;
    console.log("POST: Create Profile");
    console.log(body);
    console.log(`${"=".repeat(30)}`);
    console.log({
      firstName,
      lastName,
      bornDate,
      deathDate,
      quote,
      socialLinks,
      images,
      bio,
      status,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;

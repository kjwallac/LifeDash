const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send("Profile Routes Here");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

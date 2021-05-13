const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/profile/6096d4f37db3bb974d03154e");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;

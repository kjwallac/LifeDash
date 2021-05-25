const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(
      `https://lifedash-memorial.herokuapp.com/account/${req.user._id}` ||
        `http://localhost:3000/account/${req.user._id}`
    );
  }
);

router.get("/logout", (req, res) => {
  req.session.destroy;
  req.logout();
  res.redirect("/");
});

module.exports = router;

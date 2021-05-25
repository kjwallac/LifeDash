const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(
      `http://localhost:3000/account/${req.user._id}` ||
        `https://lifedash-memorial.herokuapp.com/${req.user._id}`
    );
  }
);

router.get("/logout", (req, res) => {
  req.session.destory;
  req.logout();
  res.redirect("/");
});

module.exports = router;

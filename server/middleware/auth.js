module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated() || req.session) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated() || !req.session) {
      return next();
    } else {
      res.redirect("/home");
    }
  },
};

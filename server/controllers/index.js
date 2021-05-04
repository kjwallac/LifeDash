//  ROUTES
const router = require("express").Router();

const userRoutes = require("./user");
const profileRoutes = require("./profile");

router.use("/user", userRoutes);
router.use("/profile", profileRoutes);

module.exports = router;

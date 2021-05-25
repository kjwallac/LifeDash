//  ROUTES
const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/profile", require("./profile"));
router.use("/google", require("./authorization/auth"));

module.exports = router;

//  ROUTES
const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/profile", require("./profile"));

module.exports = router;

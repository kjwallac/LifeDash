const router = require("express").Router();
const { findAll, findById, update, remove } = require("./userControls");

// Gets a list of users
router.get("/", findAll);

// Gets user by id
router.get("/:id", findById);

// updates user // only affects our database
router.put("/update/:id", update);

// removes user from database only
router.delete("/remove", remove);

module.exports = router;

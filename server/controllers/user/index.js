const router = require("express").Router();
const { findAll, findById, update, remove, create } = require("./userControls");

// Gets a list of users
// @ /api/user/
router.get("/", findAll);

// Gets user by id
// @ /api/user/:id
router.get("/:id", findById);

// updates user // only affects our database
// @ /api/user/update/:id
router.put("/update/:id", update);

// Creates user
// @ /api/user/create
router.post("/create", create);

// removes user from database only
// @ /api/user/remove/:id
router.delete("/remove/:id", remove);

module.exports = router;

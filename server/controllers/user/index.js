const router = require("express").Router();
const {
  findAll,
  findById,
  update,
  remove,
  create,
  login,
} = require("./userControls");
const { ensureAuth, ensureGuest } = require("../../middleware/auth");

// Gets a list of users
// @ /api/user/
router.get("/", findAll);

// Gets user by id
// @ /api/user/:id
router.get("/:id", ensureAuth, findById);

// Gets Info to Login
// @ /api/user/login
router.post("/login", ensureGuest, login);

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

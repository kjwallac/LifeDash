const router = require("express").Router();
const {
  findAll,
  findById,
  update,
  create,
  remove,
  findProfilesByUserId,
} = require("./profileController");

// Gets all profiles
router.get("/", findAll);

// Gets profile by id
router.get("/:id", findById);

// Gets profile by user id
router.get("/user/:id", findProfilesByUserId);

// Creates profile
router.post("/create", create);

// Updates profile by id
router.put("/update/:id", update);

// removes profile by id
router.delete("/remove/:id", remove);

module.exports = router;

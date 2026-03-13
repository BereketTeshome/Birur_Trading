const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  getCereals,
  createCereal,
  updateCereal,
  deleteCereal,
} = require("../controllers/cereal_controller");

router.get("/", getCereals);
router.post("/", upload.single("image"), createCereal);
router.put("/:id", upload.single("image"), updateCereal);
router.delete("/:id", deleteCereal);

module.exports = router;

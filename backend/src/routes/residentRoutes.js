const express = require("express");
const router = express.Router();
const residentController = require("../controllers/residentController");

router.post("/", residentController.createResident);
router.get("/", residentController.getAllResidents);
router.get("/:id", residentController.getResidentById);

module.exports = router;

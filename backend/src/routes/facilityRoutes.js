const express = require("express");
const router = express.Router();
const facilityController = require("../controllers/facilityController");

router.post("/", facilityController.createFacility);
router.get("/", facilityController.getAllFacilities);
router.get("/:id", facilityController.getFacilityById);

module.exports = router;

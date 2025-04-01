const express = require("express");
const router = express.Router();
const LocationServiceController = require("../controllers/locationServiceController");

router.post("/", LocationServiceController.createLocationService);
router.get("/", LocationServiceController.getAllLocationServices);
router.get("/:id", LocationServiceController.getLocationServiceById);
router.put("/:id", LocationServiceController.updateLocationService);
router.delete("/:id", LocationServiceController.deleteLocationService);

module.exports = router;

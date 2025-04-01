const express = require("express");
const router = express.Router();
const RentalController = require("../controllers/rentalController");

router.post("/", RentalController.createRental);
router.get("/", RentalController.getAllRentals);
router.get("/:id", RentalController.getRentalById);
router.put("/:id", RentalController.updateRental);
router.delete("/:id", RentalController.deleteRental);

module.exports = router;

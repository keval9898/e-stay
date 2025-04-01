const express = require("express");
const router = express.Router();
const billingController = require("../controllers/billingController");

router.post("/", billingController.createBill);
router.get("/", billingController.getAllBills);
router.get("/:id", billingController.getBillById);

module.exports = router;

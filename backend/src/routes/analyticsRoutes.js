const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analyticsController");

router.post("/", AnalyticsController.recordEvent);
router.get("/", AnalyticsController.getAllEvents);
router.get("/:eventType", AnalyticsController.getEventByType);
router.delete("/:eventType", AnalyticsController.deleteEvent);

module.exports = router;

const express = require("express");
const router = express.Router();
const SecurityLogController = require("../controllers/securityController");

router.post("/", SecurityLogController.createLog);
router.get("/", SecurityLogController.getAllLogs);
router.get("/:id", SecurityLogController.getLogById);
router.put("/:id", SecurityLogController.updateLog);
router.delete("/:id", SecurityLogController.deleteLog);

module.exports = router;

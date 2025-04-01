const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/models");

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 🔹 Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/residents", require("./src/routes/residentRoutes"));
app.use("/api/facilities", require("./src/routes/facilityRoutes"));
app.use("/api/billing", require("./src/routes/billingRoutes"));
app.use("/api/announcements", require("./src/routes/announcementRoutes"));
app.use("/api/complaints", require("./src/routes/complaintRoutes"));
app.use("/api/parking", require("./src/routes/parkingRoutes"));
app.use("/api/security", require("./src/routes/securityRoutes"));
app.use("/api/analytics", require("./src/routes/analyticsRoutes"));
app.use("/api/rentals", require("./src/routes/rentalRoutes"));
app.use("/api/events", require("./src/routes/eventRoutes"));
app.use("/api/location", require("./src/routes/locationServiceRoutes"));

// 🔹 Default Route
app.get("/", (req, res) => res.send("🏠 Welcome to Sweet Stay Residency API!"));

// 🔹 Sync DB and Export App
db.sequelize
  .sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = app;

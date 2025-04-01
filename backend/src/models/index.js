const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db");

// Initialize Sequelize with DB Config
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load Models
db.User = require("./user")(sequelize, Sequelize);
db.Resident = require("./resident")(sequelize, Sequelize);
db.Facility = require("./facility")(sequelize, Sequelize);
db.Booking = require("./booking")(sequelize, Sequelize);
db.Bill = require("./bill")(sequelize, Sequelize);
db.Announcement = require("./announcement")(sequelize, Sequelize);
db.Complaint = require("./complaint")(sequelize, Sequelize);
db.Parking = require("./parking")(sequelize, Sequelize);
db.SecurityLog = require("./securityLog")(sequelize, Sequelize);
db.Analytics = require("./analytics")(sequelize, Sequelize);
db.Rental = require("./rental")(sequelize, Sequelize);
db.Event = require("./event")(sequelize, Sequelize);
db.LocationService = require("./locationService")(sequelize, Sequelize);

// Define Relationships
db.User.hasMany(db.Resident, { foreignKey: "userId", onDelete: "CASCADE" });
db.Resident.belongsTo(db.User, { foreignKey: "userId" });

db.Facility.hasMany(db.Booking, {
  foreignKey: "facilityId",
  onDelete: "CASCADE",
});
db.Booking.belongsTo(db.Facility, { foreignKey: "facilityId" });

db.User.hasMany(db.Complaint, { foreignKey: "userId", onDelete: "CASCADE" });
db.Complaint.belongsTo(db.User, { foreignKey: "userId" });

db.Resident.hasMany(db.Parking, {
  foreignKey: "residentId",
  onDelete: "CASCADE",
});
db.Parking.belongsTo(db.Resident, { foreignKey: "residentId" });

db.User.hasMany(db.Bill, { foreignKey: "userId", onDelete: "CASCADE" });
db.Bill.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.Event, { foreignKey: "organizerId", onDelete: "CASCADE" });
db.Event.belongsTo(db.User, { foreignKey: "organizerId" });

// Automatic DB Creation and Sync
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB Connection error:", err));

sequelize
  .sync({ alter: true }) // Automatically updates the DB tables
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

module.exports = db;

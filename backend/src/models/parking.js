module.exports = (sequelize, DataTypes) => {
  const Parking = sequelize.define("Parking", {
    residentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parkingSlot: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  return Parking;
};

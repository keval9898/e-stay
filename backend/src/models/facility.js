module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define("Facility", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Available", "Under Maintenance", "Closed"),
      defaultValue: "Available",
    },
  });

  Facility.associate = (models) => {
    Facility.hasMany(models.Booking, {
      foreignKey: "facilityId",
      onDelete: "CASCADE",
    });
  };

  return Facility;
};

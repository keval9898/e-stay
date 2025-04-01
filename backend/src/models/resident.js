module.exports = (sequelize, DataTypes) => {
  const Resident = sequelize.define("Resident", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apartmentNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Resident.associate = (models) => {
    Resident.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" });
  };

  return Resident;
};

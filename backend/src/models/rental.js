module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define("Rental", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    availableFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    availableTo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Rental;
};

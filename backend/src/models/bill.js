module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define("Bill", {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "paid", "overdue"),
      defaultValue: "pending",
    },
  });

  Bill.associate = (models) => {
    Bill.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" });
  };

  return Bill;
};

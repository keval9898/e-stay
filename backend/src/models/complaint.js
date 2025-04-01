module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define("Complaint", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "In Progress", "Resolved"),
      defaultValue: "Pending",
    },
    dateFiled: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  Complaint.associate = (models) => {
    Complaint.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  return Complaint;
};

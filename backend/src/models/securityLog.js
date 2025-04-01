module.exports = (sequelize, DataTypes) => {
  const SecurityLog = sequelize.define("SecurityLog", {
    residentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return SecurityLog;
};

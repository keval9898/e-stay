module.exports = (sequelize, DataTypes) => {
  const Analytics = sequelize.define("Analytics", {
    eventType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return Analytics;
};

const db = require("../models");
const jwt = require("jsonwebtoken");

exports.registerUser = async (userData) => {
  return await db.User.create(userData);
};

exports.loginUser = async ({ email, password }) => {
  const user = await db.User.findOne({ where: { email, password } });
  if (!user) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, "your-secret-key", { expiresIn: "1h" });
  return { token, user };
};

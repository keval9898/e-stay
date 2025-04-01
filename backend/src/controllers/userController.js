const userService = require("../services/userService");

const createUser = async (req, res) => {
  const response = await userService.createUser(req.body);
  res.status(response.status).json(response);
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const response = await userService.getUserByEmail(email);
  res.status(response.status).json(response);
};

const getAllUsers = async (req, res) => {
  const response = await userService.getAllUsers();
  res.status(response.status).json(response);
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
};

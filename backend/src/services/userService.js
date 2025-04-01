const db = require("../models");
const User = db.User;

const createUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ where: { email: userData.email } });
    if (existingUser) {
      return { status: 400, message: "Email already exists." };
    }

    const newUser = await User.create(userData);
    return { status: 201, message: "User created successfully", data: newUser };
  } catch (error) {
    console.error("Error in createUser:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { status: 404, message: "User not found." };
    }
    return { status: 200, message: "User fetched successfully", data: user };
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return { status: 404, message: "No users found." };
    }
    return { status: 200, message: "Users fetched successfully", data: users };
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
};

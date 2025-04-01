const authService = require("../services/authService");
const responseHandler = require("../utils/responseUtil");

exports.register = async (req, res) => {
  try {
    debugger
    const result = await authService.registerUser(req.body);
    return res.status(200).json(result);
  } catch (error) {
    debugger
    return res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    debugger
    const result = await authService.loginUser(req.body);
    if (!result) return responseHandler.unauthorized(res, "Invalid credentials!");

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

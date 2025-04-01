const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/responseHandler");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return errorResponse(res, "Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch (error) {
    errorResponse(res, "Invalid token.");
  }
};

module.exports = authMiddleware;

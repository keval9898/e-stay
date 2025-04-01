const successResponse = (res, message, data = null) => {
    res.status(200).json({ success: true, message, data });
  };
  
  const errorResponse = (res, message = "Something went wrong! Please try again.") => {
    res.status(500).json({ success: false, message });
  };
  
  module.exports = { successResponse, errorResponse };
  
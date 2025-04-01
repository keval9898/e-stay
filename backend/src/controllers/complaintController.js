const complaintService = require("../services/complaintService");

const createComplaint = async (req, res) => {
  const response = await complaintService.createComplaint(req.body);
  res.status(response.status).json(response);
};

const getAllComplaints = async (req, res) => {
  const response = await complaintService.getAllComplaints();
  res.status(response.status).json(response);
};

const getComplaintById = async (req, res) => {
  const { id } = req.params;
  const response = await complaintService.getComplaintById(id);
  res.status(response.status).json(response);
};

const updateComplaintStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const response = await complaintService.updateComplaintStatus(id, status);
  res.status(response.status).json(response);
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaintStatus,
};

const residentService = require("../services/residentService");

const createResident = async (req, res) => {
  const response = await residentService.createResident(req.body);
  res.status(response.status).json(response);
};

const getAllResidents = async (req, res) => {
  const response = await residentService.getAllResidents();
  res.status(response.status).json(response);
};

const getResidentById = async (req, res) => {
  const { id } = req.params;
  const response = await residentService.getResidentById(id);
  res.status(response.status).json(response);
};

module.exports = {
  createResident,
  getAllResidents,
  getResidentById,
};

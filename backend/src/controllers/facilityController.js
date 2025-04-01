const facilityService = require("../services/facilityService");

const createFacility = async (req, res) => {
  const response = await facilityService.createFacility(req.body);
  res.status(response.status).json(response);
};

const getAllFacilities = async (req, res) => {
  const response = await facilityService.getAllFacilities();
  res.status(response.status).json(response);
};

const getFacilityById = async (req, res) => {
  const { id } = req.params;
  const response = await facilityService.getFacilityById(id);
  res.status(response.status).json(response);
};

module.exports = {
  createFacility,
  getAllFacilities,
  getFacilityById,
};

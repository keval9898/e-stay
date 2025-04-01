const billingService = require("../services/billingService");

const createBill = async (req, res) => {
  const response = await billingService.createBill(req.body);
  res.status(response.status).json(response);
};

const getAllBills = async (req, res) => {
  const response = await billingService.getAllBills();
  res.status(response.status).json(response);
};

const getBillById = async (req, res) => {
  const { id } = req.params;
  const response = await billingService.getBillById(id);
  res.status(response.status).json(response);
};

module.exports = {
  createBill,
  getAllBills,
  getBillById,
};

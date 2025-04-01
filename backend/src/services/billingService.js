const db = require("../models");
const Bill = db.Bill;

const createBill = async (billData) => {
  try {
    const newBill = await Bill.create(billData);
    return { status: 201, message: "Bill created successfully", data: newBill };
  } catch (error) {
    console.error("Error in createBill:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllBills = async () => {
  try {
    const bills = await Bill.findAll();
    if (bills.length === 0) {
      return { status: 404, message: "No bills found." };
    }
    return { status: 200, message: "Bills fetched successfully", data: bills };
  } catch (error) {
    console.error("Error in getAllBills:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getBillById = async (id) => {
  try {
    const bill = await Bill.findByPk(id);
    if (!bill) {
      return { status: 404, message: "Bill not found." };
    }
    return { status: 200, message: "Bill fetched successfully", data: bill };
  } catch (error) {
    console.error("Error in getBillById:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createBill,
  getAllBills,
  getBillById,
};

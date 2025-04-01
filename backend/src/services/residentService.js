const db = require("../models");
const Resident = db.Resident;

const createResident = async (residentData) => {
  try {
    const newResident = await Resident.create(residentData);
    return { status: 201, message: "Resident created successfully", data: newResident };
  } catch (error) {
    console.error("Error in createResident:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllResidents = async () => {
  try {
    const residents = await Resident.findAll();
    if (residents.length === 0) {
      return { status: 404, message: "No residents found." };
    }
    return { status: 200, message: "Residents fetched successfully", data: residents };
  } catch (error) {
    console.error("Error in getAllResidents:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getResidentById = async (id) => {
  try {
    const resident = await Resident.findByPk(id);
    if (!resident) {
      return { status: 404, message: "Resident not found." };
    }
    return { status: 200, message: "Resident fetched successfully", data: resident };
  } catch (error) {
    console.error("Error in getResidentById:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createResident,
  getAllResidents,
  getResidentById,
};

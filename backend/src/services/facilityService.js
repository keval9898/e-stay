const db = require("../models");
const Facility = db.Facility;

const createFacility = async (facilityData) => {
  try {
    const newFacility = await Facility.create(facilityData);
    return { status: 201, message: "Facility created successfully", data: newFacility };
  } catch (error) {
    console.error("Error in createFacility:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllFacilities = async () => {
  try {
    const facilities = await Facility.findAll();
    if (facilities.length === 0) {
      return { status: 404, message: "No facilities found." };
    }
    return { status: 200, message: "Facilities fetched successfully", data: facilities };
  } catch (error) {
    console.error("Error in getAllFacilities:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getFacilityById = async (id) => {
  try {
    const facility = await Facility.findByPk(id);
    if (!facility) {
      return { status: 404, message: "Facility not found." };
    }
    return { status: 200, message: "Facility fetched successfully", data: facility };
  } catch (error) {
    console.error("Error in getFacilityById:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createFacility,
  getAllFacilities,
  getFacilityById,
};

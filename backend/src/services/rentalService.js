const db = require("../models");
const Rental = db.Rental;

const RentalService = {
  async createRental(data) {
    try {
      const rental = await Rental.create(data);
      return { status: 201, message: "Rental created successfully", data: rental };
    } catch (error) {
      console.error("Error creating rental:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllRentals() {
    try {
      const rentals = await Rental.findAll();
      return { status: 200, data: rentals };
    } catch (error) {
      console.error("Error fetching rentals:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getRentalById(id) {
    try {
      const rental = await Rental.findByPk(id);
      if (!rental) return { status: 404, message: "Rental not found" };
      return { status: 200, data: rental };
    } catch (error) {
      console.error("Error fetching rental:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async updateRental(id, data) {
    try {
      const rental = await Rental.findByPk(id);
      if (!rental) return { status: 404, message: "Rental not found" };
      await rental.update(data);
      return { status: 200, message: "Rental updated successfully", data: rental };
    } catch (error) {
      console.error("Error updating rental:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteRental(id) {
    try {
      const rental = await Rental.findByPk(id);
      if (!rental) return { status: 404, message: "Rental not found" };
      await rental.destroy();
      return { status: 200, message: "Rental deleted successfully" };
    } catch (error) {
      console.error("Error deleting rental:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = RentalService;

const db = require("../models");
const Parking = db.Parking;

const ParkingService = {
  async createParking(parkingData) {
    try {
      const parking = await Parking.create(parkingData);
      return { status: 201, message: "Parking created successfully", data: parking };
    } catch (error) {
      console.error("Error creating parking:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllParkings() {
    try {
      const parkings = await Parking.findAll();
      return { status: 200, data: parkings };
    } catch (error) {
      console.error("Error fetching parkings:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getParkingById(parkingId) {
    try {
      const parking = await Parking.findByPk(parkingId);
      if (!parking) return { status: 404, message: "Parking not found" };
      return { status: 200, data: parking };
    } catch (error) {
      console.error("Error fetching parking:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async updateParking(parkingId, parkingData) {
    try {
      const parking = await Parking.findByPk(parkingId);
      if (!parking) return { status: 404, message: "Parking not found" };
      await parking.update(parkingData);
      return { status: 200, message: "Parking updated successfully", data: parking };
    } catch (error) {
      console.error("Error updating parking:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteParking(parkingId) {
    try {
      const parking = await Parking.findByPk(parkingId);
      if (!parking) return { status: 404, message: "Parking not found" };
      await parking.destroy();
      return { status: 200, message: "Parking deleted successfully" };
    } catch (error) {
      console.error("Error deleting parking:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = ParkingService;

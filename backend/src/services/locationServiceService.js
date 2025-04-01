const db = require("../models");
const LocationService = db.LocationService;

const LocationServiceService = {
  async createLocationService(data) {
    try {
      const locationService = await LocationService.create(data);
      return {
        status: 201,
        message: "Location Service created successfully",
        data: locationService,
      };
    } catch (error) {
      console.error("Error creating location service:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllLocationServices() {
    try {
      const locationServices = await LocationService.findAll();
      return { status: 200, data: locationServices };
    } catch (error) {
      console.error("Error fetching location services:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getLocationServiceById(id) {
    try {
      const locationService = await LocationService.findByPk(id);
      if (!locationService)
        return { status: 404, message: "Location Service not found" };
      return { status: 200, data: locationService };
    } catch (error) {
      console.error("Error fetching location service:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async updateLocationService(id, data) {
    try {
      const locationService = await LocationService.findByPk(id);
      if (!locationService)
        return { status: 404, message: "Location Service not found" };
      await locationService.update(data);
      return {
        status: 200,
        message: "Location Service updated successfully",
        data: locationService,
      };
    } catch (error) {
      console.error("Error updating location service:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteLocationService(id) {
    try {
      const locationService = await LocationService.findByPk(id);
      if (!locationService)
        return { status: 404, message: "Location Service not found" };
      await locationService.destroy();
      return { status: 200, message: "Location Service deleted successfully" };
    } catch (error) {
      console.error("Error deleting location service:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = LocationServiceService;

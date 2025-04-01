const ParkingService = require("../services/parkingService");

const ParkingController = {
  async createParking(req, res) {
    try {
      const result = await ParkingService.createParking(req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllParkings(req, res) {
    try {
      const result = await ParkingService.getAllParkings();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getParkingById(req, res) {
    try {
      const result = await ParkingService.getParkingById(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async updateParking(req, res) {
    try {
      const result = await ParkingService.updateParking(req.params.id, req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteParking(req, res) {
    try {
      const result = await ParkingService.deleteParking(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = ParkingController;

const LocationService = require("../services/locationServiceService");

const LocationServiceController = {
  async createLocationService(req, res) {
    try {
      const result = await LocationService.createLocationService(req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllLocationServices(req, res) {
    try {
      const result = await LocationService.getAllLocationServices();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getLocationServiceById(req, res) {
    try {
      const result = await LocationService.getLocationServiceById(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async updateLocationService(req, res) {
    try {
      const result = await LocationService.updateLocationService(
        req.params.id,
        req.body
      );
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteLocationService(req, res) {
    try {
      const result = await LocationService.deleteLocationService(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = LocationServiceController;

const RentalService = require("../services/rentalService");

const RentalController = {
  async createRental(req, res) {
    try {
      const result = await RentalService.createRental(req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllRentals(req, res) {
    try {
      const result = await RentalService.getAllRentals();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getRentalById(req, res) {
    try {
      const result = await RentalService.getRentalById(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async updateRental(req, res) {
    try {
      const result = await RentalService.updateRental(req.params.id, req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteRental(req, res) {
    try {
      const result = await RentalService.deleteRental(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = RentalController;

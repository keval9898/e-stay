const SecurityLogService = require("../services/securityLogService");

const SecurityLogController = {
  async createLog(req, res) {
    try {
      const result = await SecurityLogService.createLog(req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllLogs(req, res) {
    try {
      const result = await SecurityLogService.getAllLogs();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getLogById(req, res) {
    try {
      const result = await SecurityLogService.getLogById(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async updateLog(req, res) {
    try {
      const result = await SecurityLogService.updateLog(req.params.id, req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteLog(req, res) {
    try {
      const result = await SecurityLogService.deleteLog(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = SecurityLogController;

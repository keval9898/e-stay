const AnalyticsService = require("../services/analyticsService");

const AnalyticsController = {
  async recordEvent(req, res) {
    try {
      const { eventType } = req.body;
      const result = await AnalyticsService.recordEvent(eventType);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllEvents(req, res) {
    try {
      const result = await AnalyticsService.getAllEvents();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getEventByType(req, res) {
    try {
      const result = await AnalyticsService.getEventByType(req.params.eventType);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteEvent(req, res) {
    try {
      const result = await AnalyticsService.deleteEvent(req.params.eventType);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = AnalyticsController;

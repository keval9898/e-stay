const EventService = require("../services/eventService");

const EventController = {
  async createEvent(req, res) {
    try {
      const result = await EventService.createEvent(req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getAllEvents(req, res) {
    try {
      const result = await EventService.getAllEvents();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async getEventById(req, res) {
    try {
      const result = await EventService.getEventById(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async updateEvent(req, res) {
    try {
      const result = await EventService.updateEvent(req.params.id, req.body);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },

  async deleteEvent(req, res) {
    try {
      const result = await EventService.deleteEvent(req.params.id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  },
};

module.exports = EventController;

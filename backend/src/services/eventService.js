const db = require("../models");
const Event = db.Event;

const EventService = {
  async createEvent(data) {
    try {
      const event = await Event.create(data);
      return { status: 201, message: "Event created successfully", data: event };
    } catch (error) {
      console.error("Error creating event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllEvents() {
    try {
      const events = await Event.findAll();
      return { status: 200, data: events };
    } catch (error) {
      console.error("Error fetching events:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getEventById(id) {
    try {
      const event = await Event.findByPk(id);
      if (!event) return { status: 404, message: "Event not found" };
      return { status: 200, data: event };
    } catch (error) {
      console.error("Error fetching event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async updateEvent(id, data) {
    try {
      const event = await Event.findByPk(id);
      if (!event) return { status: 404, message: "Event not found" };
      await event.update(data);
      return { status: 200, message: "Event updated successfully", data: event };
    } catch (error) {
      console.error("Error updating event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteEvent(id) {
    try {
      const event = await Event.findByPk(id);
      if (!event) return { status: 404, message: "Event not found" };
      await event.destroy();
      return { status: 200, message: "Event deleted successfully" };
    } catch (error) {
      console.error("Error deleting event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = EventService;

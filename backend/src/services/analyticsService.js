const db = require("../models");
const Analytics = db.Analytics;

const AnalyticsService = {
  async recordEvent(eventType) {
    try {
      let event = await Analytics.findOne({ where: { eventType } });
      if (event) {
        event.eventCount += 1;
        await event.save();
      } else {
        event = await Analytics.create({ eventType, eventCount: 1 });
      }
      return { status: 200, message: "Event recorded successfully", data: event };
    } catch (error) {
      console.error("Error recording event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllEvents() {
    try {
      const events = await Analytics.findAll();
      return { status: 200, data: events };
    } catch (error) {
      console.error("Error fetching analytics:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getEventByType(eventType) {
    try {
      const event = await Analytics.findOne({ where: { eventType } });
      if (!event) return { status: 404, message: "Event not found" };
      return { status: 200, data: event };
    } catch (error) {
      console.error("Error fetching event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteEvent(eventType) {
    try {
      const event = await Analytics.findOne({ where: { eventType } });
      if (!event) return { status: 404, message: "Event not found" };
      await event.destroy();
      return { status: 200, message: "Event deleted successfully" };
    } catch (error) {
      console.error("Error deleting event:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = AnalyticsService;

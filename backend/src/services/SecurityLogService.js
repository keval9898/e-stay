const db = require("../models");
const SecurityLog = db.SecurityLog;

const SecurityLogService = {
  async createLog(logData) {
    try {
      const log = await SecurityLog.create(logData);
      return { status: 201, message: "Security log created successfully", data: log };
    } catch (error) {
      console.error("Error creating security log:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getAllLogs() {
    try {
      const logs = await SecurityLog.findAll();
      return { status: 200, data: logs };
    } catch (error) {
      console.error("Error fetching security logs:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async getLogById(logId) {
    try {
      const log = await SecurityLog.findByPk(logId);
      if (!log) return { status: 404, message: "Security log not found" };
      return { status: 200, data: log };
    } catch (error) {
      console.error("Error fetching security log:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async updateLog(logId, logData) {
    try {
      const log = await SecurityLog.findByPk(logId);
      if (!log) return { status: 404, message: "Security log not found" };
      await log.update(logData);
      return { status: 200, message: "Security log updated successfully", data: log };
    } catch (error) {
      console.error("Error updating security log:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },

  async deleteLog(logId) {
    try {
      const log = await SecurityLog.findByPk(logId);
      if (!log) return { status: 404, message: "Security log not found" };
      await log.destroy();
      return { status: 200, message: "Security log deleted successfully" };
    } catch (error) {
      console.error("Error deleting security log:", error);
      throw { status: 500, message: "Something went wrong! Please try again." };
    }
  },
};

module.exports = SecurityLogService;

const db = require("../models");
const Announcement = db.Announcement;

const createAnnouncement = async (announcementData) => {
  try {
    const newAnnouncement = await Announcement.create(announcementData);
    return {
      status: 201,
      message: "Announcement created successfully",
      data: newAnnouncement,
    };
  } catch (error) {
    console.error("Error in createAnnouncement:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllAnnouncements = async () => {
  try {
    const announcements = await Announcement.findAll();
    if (announcements.length === 0) {
      return { status: 404, message: "No announcements found." };
    }
    return {
      status: 200,
      message: "Announcements fetched successfully",
      data: announcements,
    };
  } catch (error) {
    console.error("Error in getAllAnnouncements:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAnnouncementById = async (id) => {
  try {
    const announcement = await Announcement.findByPk(id);
    if (!announcement) {
      return { status: 404, message: "Announcement not found." };
    }
    return {
      status: 200,
      message: "Announcement fetched successfully",
      data: announcement,
    };
  } catch (error) {
    console.error("Error in getAnnouncementById:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
};

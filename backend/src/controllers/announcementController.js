const announcementService = require("../services/announcementService");

const createAnnouncement = async (req, res) => {
  const response = await announcementService.createAnnouncement(req.body);
  res.status(response.status).json(response);
};

const getAllAnnouncements = async (req, res) => {
  const response = await announcementService.getAllAnnouncements();
  res.status(response.status).json(response);
};

const getAnnouncementById = async (req, res) => {
  const { id } = req.params;
  const response = await announcementService.getAnnouncementById(id);
  res.status(response.status).json(response);
};

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
};

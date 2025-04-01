const db = require("../models");
const Complaint = db.Complaint;

const createComplaint = async (complaintData) => {
  try {
    const newComplaint = await Complaint.create(complaintData);
    return {
      status: 201,
      message: "Complaint registered successfully",
      data: newComplaint,
    };
  } catch (error) {
    console.error("Error in createComplaint:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getAllComplaints = async () => {
  try {
    const complaints = await Complaint.findAll();
    if (complaints.length === 0) {
      return { status: 404, message: "No complaints found." };
    }
    return {
      status: 200,
      message: "Complaints fetched successfully",
      data: complaints,
    };
  } catch (error) {
    console.error("Error in getAllComplaints:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const getComplaintById = async (id) => {
  try {
    const complaint = await Complaint.findByPk(id);
    if (!complaint) {
      return { status: 404, message: "Complaint not found." };
    }
    return {
      status: 200,
      message: "Complaint fetched successfully",
      data: complaint,
    };
  } catch (error) {
    console.error("Error in getComplaintById:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

const updateComplaintStatus = async (id, status) => {
  try {
    const complaint = await Complaint.findByPk(id);
    if (!complaint) {
      return { status: 404, message: "Complaint not found." };
    }
    complaint.status = status;
    await complaint.save();
    return {
      status: 200,
      message: "Complaint status updated successfully",
      data: complaint,
    };
  } catch (error) {
    console.error("Error in updateComplaintStatus:", error);
    return { status: 500, message: "Something went wrong! Please try again." };
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaintStatus,
};

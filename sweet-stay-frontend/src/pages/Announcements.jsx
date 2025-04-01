import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios.get("http://localhost:8000/api/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/announcements/${editId}`, { title, message })
        .then(() => {
          fetchAnnouncements();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/announcements", { title, message })
        .then(() => {
          fetchAnnouncements();
          resetForm();
        });
    }
  };

  const handleEdit = (announcement) => {
    setEditId(announcement.id);
    setTitle(announcement.title);
    setMessage(announcement.message);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/announcements/${id}`)
      .then(() => fetchAnnouncements());
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setMessage("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Announcements" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit">{editId ? "Update" : "Add"} Announcement</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement.id}>
                <td>{announcement.title}</td>
                <td>{announcement.message}</td>
                <td>
                  <button onClick={() => handleEdit(announcement)}>Edit</button>
                  <button onClick={() => handleDelete(announcement.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcements;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = () => {
    axios.get("http://localhost:8000/api/complaints")
      .then((res) => setComplaints(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/complaints/${editId}`, { title, description })
        .then(() => {
          fetchComplaints();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/complaints", { title, description })
        .then(() => {
          fetchComplaints();
          resetForm();
        });
    }
  };

  const handleEdit = (complaint) => {
    setEditId(complaint.id);
    setTitle(complaint.title);
    setDescription(complaint.description);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/complaints/${id}`)
      .then(() => fetchComplaints());
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Resident Complaints" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <button type="submit">{editId ? "Update" : "Add"} Complaint</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.title}</td>
                <td>{complaint.description}</td>
                <td>
                  <button onClick={() => handleEdit(complaint)}>Edit</button>
                  <button onClick={() => handleDelete(complaint.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaints;

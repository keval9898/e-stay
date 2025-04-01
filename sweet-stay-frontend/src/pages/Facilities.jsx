import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = () => {
    axios.get("http://localhost:8000/api/facilities")
      .then((res) => setFacilities(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/facilities/${editId}`, { name, status })
        .then(() => {
          fetchFacilities();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/facilities", { name, status })
        .then(() => {
          fetchFacilities();
          resetForm();
        });
    }
  };

  const handleEdit = (facility) => {
    setEditId(facility.id);
    setName(facility.name);
    setStatus(facility.status);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/facilities/${id}`)
      .then(() => fetchFacilities());
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setStatus("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Facilities" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Facility Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Under Maintenance">Under Maintenance</option>
          </select>
          <button type="submit">{editId ? "Update" : "Add"} Facility</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility) => (
              <tr key={facility.id}>
                <td>{facility.name}</td>
                <td>{facility.status}</td>
                <td>
                  <button onClick={() => handleEdit(facility)}>Edit</button>
                  <button onClick={() => handleDelete(facility.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facilities;

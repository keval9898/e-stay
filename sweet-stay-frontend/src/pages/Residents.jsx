import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Residents = () => {
  const [residents, setResidents] = useState([]);
  const [name, setName] = useState("");
  const [apartment, setApartment] = useState("");
  const [contact, setContact] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = () => {
    axios.get("http://localhost:8000/api/residents")
      .then((res) => setResidents(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/residents/${editId}`, { name, apartment, contact })
        .then(() => {
          fetchResidents();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/residents", { name, apartment, contact })
        .then(() => {
          fetchResidents();
          resetForm();
        });
    }
  };

  const handleEdit = (resident) => {
    setEditId(resident.id);
    setName(resident.name);
    setApartment(resident.apartment);
    setContact(resident.contact);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/residents/${id}`)
      .then(() => fetchResidents());
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setApartment("");
    setContact("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Residents" />
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Apartment" value={apartment} onChange={(e) => setApartment(e.target.value)} required />
          <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
          <button type="submit">{editId ? "Update" : "Add"} Resident</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Apartment</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr key={resident.id}>
                <td>{resident.name}</td>
                <td>{resident.apartment}</td>
                <td>{resident.contact}</td>
                <td>
                  <button onClick={() => handleEdit(resident)}>Edit</button>
                  <button onClick={() => handleDelete(resident.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Residents;

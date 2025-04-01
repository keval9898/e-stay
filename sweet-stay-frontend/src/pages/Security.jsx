import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Security = () => {
  const [guards, setGuards] = useState([]);
  const [name, setName] = useState("");
  const [shift, setShift] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchGuards();
  }, []);

  const fetchGuards = () => {
    axios.get("http://localhost:8000/api/security")
      .then((res) => setGuards(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/security/${editId}`, { name, shift })
        .then(() => {
          fetchGuards();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/security", { name, shift })
        .then(() => {
          fetchGuards();
          resetForm();
        });
    }
  };

  const handleEdit = (guard) => {
    setEditId(guard.id);
    setName(guard.name);
    setShift(guard.shift);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/security/${id}`)
      .then(() => fetchGuards());
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setShift("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Security Guards" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Guard Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Shift (Day/Night)" value={shift} onChange={(e) => setShift(e.target.value)} required />
          <button type="submit">{editId ? "Update" : "Add"} Guard</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Shift</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guards.map((guard) => (
              <tr key={guard.id}>
                <td>{guard.name}</td>
                <td>{guard.shift}</td>
                <td>
                  <button onClick={() => handleEdit(guard)}>Edit</button>
                  <button onClick={() => handleDelete(guard.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Security;

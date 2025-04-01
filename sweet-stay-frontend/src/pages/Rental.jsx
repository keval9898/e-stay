import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Rental = () => {
  const [rentals, setRentals] = useState([]);
  const [unitNumber, setUnitNumber] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRentals();
  }, []);

  const fetchRentals = () => {
    axios.get("http://localhost:8000/api/rental")
      .then((res) => setRentals(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/rental/${editId}`, { unitNumber, tenantName, rentAmount })
        .then(() => {
          fetchRentals();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/rental", { unitNumber, tenantName, rentAmount })
        .then(() => {
          fetchRentals();
          resetForm();
        });
    }
  };

  const handleEdit = (rental) => {
    setEditId(rental.id);
    setUnitNumber(rental.unitNumber);
    setTenantName(rental.tenantName);
    setRentAmount(rental.rentAmount);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/rental/${id}`)
      .then(() => fetchRentals());
  };

  const resetForm = () => {
    setEditId(null);
    setUnitNumber("");
    setTenantName("");
    setRentAmount("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Rental Management" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Unit Number" value={unitNumber} onChange={(e) => setUnitNumber(e.target.value)} required />
          <input type="text" placeholder="Tenant Name" value={tenantName} onChange={(e) => setTenantName(e.target.value)} required />
          <input type="number" placeholder="Rent Amount" value={rentAmount} onChange={(e) => setRentAmount(e.target.value)} required />
          <button type="submit">{editId ? "Update" : "Add"} Rental</button>
        </form>

      </div>
    </div>
  );
};

export default Rental;

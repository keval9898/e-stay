import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Parking = () => {
  const [parkingSlots, setParkingSlots] = useState([]);
  const [slotNumber, setSlotNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchParkingSlots();
  }, []);

  const fetchParkingSlots = () => {
    axios.get("http://localhost:8000/api/parking")
      .then((res) => setParkingSlots(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/parking/${editId}`, { slotNumber, vehicleNumber })
        .then(() => {
          fetchParkingSlots();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/parking", { slotNumber, vehicleNumber })
        .then(() => {
          fetchParkingSlots();
          resetForm();
        });
    }
  };

  const handleEdit = (slot) => {
    setEditId(slot.id);
    setSlotNumber(slot.slotNumber);
    setVehicleNumber(slot.vehicleNumber);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/parking/${id}`)
      .then(() => fetchParkingSlots());
  };

  const resetForm = () => {
    setEditId(null);
    setSlotNumber("");
    setVehicleNumber("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Parking Management" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Slot Number" value={slotNumber} onChange={(e) => setSlotNumber(e.target.value)} required />
          <input type="text" placeholder="Vehicle Number" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
          <button type="submit">{editId ? "Update" : "Add"} Slot</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Slot Number</th>
              <th>Vehicle Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parkingSlots.map((slot) => (
              <tr key={slot.id}>
                <td>{slot.slotNumber}</td>
                <td>{slot.vehicleNumber}</td>
                <td>
                  <button onClick={() => handleEdit(slot)}>Edit</button>
                  <button onClick={() => handleDelete(slot.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parking;

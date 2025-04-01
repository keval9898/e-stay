import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get("http://localhost:8000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/events/${editId}`, { name, date, location })
        .then(() => {
          fetchEvents();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/events", { name, date, location })
        .then(() => {
          fetchEvents();
          resetForm();
        });
    }
  };

  const handleEdit = (event) => {
    setEditId(event.id);
    setName(event.name);
    setDate(event.date);
    setLocation(event.location);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/events/${id}`)
      .then(() => fetchEvents());
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setDate("");
    setLocation("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Events" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          <button type="submit">{editId ? "Update" : "Add"} Event</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  <button onClick={() => handleEdit(event)}>Edit</button>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;

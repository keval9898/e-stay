import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [resident, setResident] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    axios.get("http://localhost:8000/api/payments")
      .then((res) => setPayments(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      axios.put(`http://localhost:8000/api/payments/${editId}`, { resident, amount, status })
        .then(() => {
          fetchPayments();
          resetForm();
        });
    } else {
      axios.post("http://localhost:8000/api/payments", { resident, amount, status })
        .then(() => {
          fetchPayments();
          resetForm();
        });
    }
  };

  const handleEdit = (payment) => {
    setEditId(payment.id);
    setResident(payment.resident);
    setAmount(payment.amount);
    setStatus(payment.status);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/payments/${id}`)
      .then(() => fetchPayments());
  };

  const resetForm = () => {
    setEditId(null);
    setResident("");
    setAmount("");
    setStatus("");
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header title="Payments" />

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Resident Name" value={resident} onChange={(e) => setResident(e.target.value)} required />
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <button type="submit">{editId ? "Update" : "Add"} Payment</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Resident</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.resident}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
                <td>
                  <button onClick={() => handleEdit(payment)}>Edit</button>
                  <button onClick={() => handleDelete(payment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;

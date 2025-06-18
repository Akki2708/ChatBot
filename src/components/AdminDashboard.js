import React, { useState } from "react";

function AdminDashboard({ appointments, onLogout }) {
  const [search, setSearch] = useState("");

  const filtered = appointments.filter((a) => {
    const s = search.toLowerCase();
    return (
      a.name?.toLowerCase().includes(s) ||
      a.contact?.toLowerCase().includes(s) ||
      a.email?.toLowerCase().includes(s) ||
      a.date?.includes(s) ||
      a.doctor?.toLowerCase().includes(s)
    );
  });

  return (
    <div className="admin-container">
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Admin Dashboard</h2>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>

        <div className="appointments-table">
          <div className="table-header">
            <h3>Appointments</h3>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, contact, email, date, or doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                        color: "#888",
                        padding: "18px",
                      }}
                    >
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((a, i) => (
                    <tr key={i}>
                      <td>{a.name}</td>
                      <td>{a.contact}</td>
                      <td>{a.email}</td>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td>{a.doctor}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

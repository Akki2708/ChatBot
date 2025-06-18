import React, { useState, useEffect } from "react";

function BookAppointment({ onBack, selectedDoctor }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [error, setError] = useState("");

  // Pre-fill doctor field if a doctor was selected
  useEffect(() => {
    if (selectedDoctor) {
      setDoctor(selectedDoctor.name);
    }
  }, [selectedDoctor]);

  const validateEmail = (email) => /.+@.+\..+/.test(email);
  const validateContact = (contact) => /^\d{10}$/.test(contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please enter your name.");
    if (!validateContact(contact))
      return setError("Please enter a valid 10-digit contact number.");
    if (!validateEmail(email))
      return setError("Please enter a valid email address.");
    if (!doctor.trim()) return setError("Please select a doctor.");

    // Save appointment to localStorage
    const newAppt = { name, contact, email, date, time, doctor };
    const appts = JSON.parse(localStorage.getItem("appointments")) || [];
    appts.push(newAppt);
    localStorage.setItem("appointments", JSON.stringify(appts));

    alert(
      `Appointment booked for ${name} (${contact}, ${email}) on ${date} at ${time} with ${doctor}`
    );

    // Clear form after successful booking
    setName("");
    setContact("");
    setEmail("");
    setDate("");
    setTime("");
    setDoctor("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fafd 0%, #e0e6ed 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 4px 32px rgba(102,126,234,0.10)",
          padding: "2.2rem 2rem 2rem 2rem",
          margin: "auto",
          position: "relative",
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={onBack}
          style={{
            marginBottom: "1rem",
            background: "#dc3545",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "1rem",
            position: "absolute",
            left: 24,
            top: 24,
            zIndex: 2,
          }}
        >
          ← Back
        </button>
        <h2
          style={{
            textAlign: "center",
            margin: "0 0 1.5rem 0",
            fontWeight: 700,
            color: "#4f8cff",
          }}
        >
          Book an Appointment
        </h2>
        {selectedDoctor && (
          <div
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              padding: "1rem",
              borderRadius: "10px",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0" }}>Selected Doctor</h3>
            <p style={{ margin: "0", fontSize: "1.1rem" }}>
              {selectedDoctor.name}
            </p>
            <p style={{ margin: "0.5rem 0 0 0", opacity: "0.9" }}>
              {selectedDoctor.specialty}
            </p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: selectedDoctor ? 0 : 32 }}
        >
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 16,
              }}
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              maxLength={10}
              pattern="\d{10}"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 16,
              }}
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 16,
              }}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 16,
              }}
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 16,
              }}
            />
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e0e6ed",
                marginBottom: 24,
              }}
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Priya Sharma">
                Dr. Priya Sharma - Cardiologist
              </option>
              <option value="Dr. Rahul Mehta">
                Dr. Rahul Mehta - Orthopedic Surgeon
              </option>
              <option value="Dr. Anjali Desai">
                Dr. Anjali Desai - Pediatrician
              </option>
              <option value="Dr. Sameer Kulkarni">
                Dr. Sameer Kulkarni - Dermatologist
              </option>
            </select>
          </div>
          {error && (
            <div style={{ color: "#dc3545", marginBottom: "1rem" }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "12px",
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: 8,
            }}
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;

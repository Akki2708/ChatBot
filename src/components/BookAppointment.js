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
    <div className="appointment-container">
      <div className="appointment-form-card">
        <h2 className="appointment-title">Book an Appointment</h2>
        {selectedDoctor && (
          <div className="selected-doctor-card">
            <h3>Selected Doctor</h3>
            <p className="doctor-name">{selectedDoctor.name}</p>
            <p className="doctor-specialty">{selectedDoctor.specialty}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
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
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
              className="form-input"
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
          {error && <div className="error-message">{error}</div>}
          <button
            type="submit"
            className="btn btn-primary appointment-submit-btn"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;

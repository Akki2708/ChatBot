import React, { useState } from "react";

function MedicationReminder({ onBack }) {
  const [medication, setMedication] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reminder set for ${medication} at ${time} ${frequency}`);
  };

  return (
    <div className="medication-reminder-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="medication-reminder-title">Set Medication Reminder</h2>
      <form onSubmit={handleSubmit} className="medication-form">
        <div className="form-group">
          <label className="medication-label">Medication Name</label>
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className="medication-input"
            required
            placeholder="Enter medication name..."
          />
        </div>
        <div className="form-group">
          <label className="medication-label">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="medication-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="medication-label">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="medication-input"
            required
          >
            <option value="daily">Daily</option>
            <option value="twice-daily">Twice Daily</option>
            <option value="three-times">Three Times Daily</option>
            <option value="weekly">Weekly</option>
            <option value="as-needed">As Needed</option>
          </select>
        </div>
        <button type="submit" className="set-reminder-btn">
          Set Reminder
        </button>
      </form>
    </div>
  );
}

export default MedicationReminder;

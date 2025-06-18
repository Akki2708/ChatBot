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
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
        background: "#232b3a",
        borderRadius: 16,
        boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: 16,
          background: "#4fd1c5",
          color: "#181f2a",
          border: "none",
          borderRadius: 8,
          padding: "8px 18px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
      <h2 style={{ color: "#e0e6ed", textAlign: "center", marginBottom: 20 }}>
        Set Medication Reminder
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{ display: "block", marginBottom: 8, color: "#e0e6ed" }}
          >
            Medication Name
          </label>
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#202736",
              color: "#e0e6ed",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{ display: "block", marginBottom: 8, color: "#e0e6ed" }}
          >
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#202736",
              color: "#e0e6ed",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{ display: "block", marginBottom: 8, color: "#e0e6ed" }}
          >
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#202736",
              color: "#e0e6ed",
            }}
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "#4fd1c5",
            color: "#181f2a",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Set Reminder
        </button>
      </form>
    </div>
  );
}

export default MedicationReminder;

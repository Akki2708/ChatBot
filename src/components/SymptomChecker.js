import React, { useState } from "react";

function SymptomChecker({ onBack }) {
  const [symptoms, setSymptoms] = useState("");
  const [insight, setInsight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: In a real app, you would integrate with an AI service to get insights
    setInsight(
      "Based on your symptoms, you may have a common cold. Please consult a doctor for a proper diagnosis."
    );
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
        Symptom Checker
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label
            style={{ display: "block", marginBottom: 8, color: "#e0e6ed" }}
          >
            Enter your symptoms
          </label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#202736",
              color: "#e0e6ed",
              minHeight: 100,
            }}
            required
          />
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
          Check Symptoms
        </button>
      </form>
      {insight && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            background: "#2d3748",
            borderRadius: 8,
          }}
        >
          <p style={{ color: "#e0e6ed" }}>{insight}</p>
          <p style={{ color: "#e0e6ed", fontSize: 14, marginTop: 10 }}>
            <em>
              Note: This is not a substitute for professional medical advice.
              Please consult a doctor for a proper diagnosis.
            </em>
          </p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;

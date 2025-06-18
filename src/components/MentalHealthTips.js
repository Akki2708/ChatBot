import React, { useState } from "react";

const tips = [
  "Practice mindfulness and meditation daily.",
  "Stay connected with friends and family.",
  "Engage in regular physical activity.",
  "Maintain a healthy sleep schedule.",
  "Limit screen time and take breaks.",
  "Seek professional help if needed.",
];

function MentalHealthTips({ onBack }) {
  const [currentTip, setCurrentTip] = useState(tips[0]);

  const refreshTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(tips[randomIndex]);
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
        Mental Health Tips
      </h2>
      <div
        style={{
          padding: 20,
          background: "#2d3748",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <p style={{ color: "#e0e6ed", fontSize: 18 }}>{currentTip}</p>
      </div>
      <button
        onClick={refreshTip}
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
        Refresh Tip
      </button>
    </div>
  );
}

export default MentalHealthTips;

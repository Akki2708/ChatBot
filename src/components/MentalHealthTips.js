import React, { useState } from "react";

const tips = [
  "Practice mindfulness and meditation daily for better mental clarity and stress reduction.",
  "Stay connected with friends and family - social support is crucial for mental well-being.",
  "Engage in regular physical activity to boost mood and reduce anxiety and depression.",
  "Maintain a healthy sleep schedule with 7-9 hours of quality sleep each night.",
  "Limit screen time and take regular breaks from digital devices to reduce stress.",
  "Seek professional help if you're experiencing persistent mental health challenges.",
  "Practice gratitude by writing down three things you're thankful for each day.",
  "Learn to say no and set healthy boundaries to protect your mental energy.",
  "Spend time in nature to reduce stress and improve overall mental health.",
  "Develop a hobby or creative outlet to express yourself and find joy.",
];

function MentalHealthTips({ onBack }) {
  const [currentTip, setCurrentTip] = useState(tips[0]);

  const refreshTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(tips[randomIndex]);
  };

  return (
    <div className="mental-health-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="mental-health-title">Mental Health Tips</h2>
      <div className="tip-card">
        <p className="tip-text">{currentTip}</p>
      </div>
      <button className="refresh-tip-btn" onClick={refreshTip}>
        Get Another Tip
      </button>
    </div>
  );
}

export default MentalHealthTips;

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
    <div className="symptom-checker-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="symptom-checker-title">Symptom Checker</h2>
      <form onSubmit={handleSubmit} className="symptom-form">
        <div className="form-group">
          <label className="symptom-label">Enter your symptoms</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="symptom-textarea"
            required
            placeholder="Describe your symptoms in detail..."
          />
        </div>
        <button type="submit" className="check-symptoms-btn">
          Check Symptoms
        </button>
      </form>
      {insight && (
        <div className="insight-card">
          <p className="insight-text">{insight}</p>
          <p className="disclaimer">
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

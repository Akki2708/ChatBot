import React, { useState } from "react";

const faqs = [
  {
    question: "What is a healthy diet?",
    answer:
      "A healthy diet includes a variety of fruits, vegetables, lean proteins, whole grains, and limited processed foods and sugars.",
  },
  {
    question: "How much water should I drink daily?",
    answer:
      "It is recommended to drink at least 8 glasses (64 ounces) of water daily, but this can vary based on activity level and climate.",
  },
  {
    question: "What are the benefits of regular exercise?",
    answer:
      "Regular exercise helps maintain a healthy weight, improves cardiovascular health, boosts mood, and reduces the risk of chronic diseases.",
  },
  {
    question: "How can I improve my sleep quality?",
    answer:
      "To improve sleep quality, maintain a regular sleep schedule, create a relaxing bedtime routine, and avoid caffeine and screens before bed.",
  },
  {
    question: "What are common symptoms of stress?",
    answer:
      "Common symptoms of stress include headaches, muscle tension, fatigue, irritability, and difficulty concentrating.",
  },
];

function HealthFAQs({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: 800,
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
        Health FAQs
      </h2>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 20,
          borderRadius: 8,
          border: "none",
          background: "#202736",
          color: "#e0e6ed",
        }}
      />
      <div>
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: 20,
              padding: 15,
              background: "#2d3748",
              borderRadius: 8,
            }}
          >
            <h3 style={{ color: "#4fd1c5", marginBottom: 10 }}>
              {faq.question}
            </h3>
            <p style={{ color: "#e0e6ed" }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthFAQs;

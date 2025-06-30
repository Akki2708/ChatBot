import React, { useState } from "react";

const faqs = [
  {
    question: "What are the hospital's operating hours?",
    answer:
      "Our hospital operates 24/7 for emergency services. Regular outpatient services are available Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our online booking system, by calling our reception at +1 (555) 123-4567, or by visiting our hospital in person.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealth, and Medicare/Medicaid. Please contact our billing department for specific coverage details.",
  },
  {
    question: "Is parking available at the hospital?",
    answer:
      "Yes, we provide free parking for all patients and visitors. Our parking lot is located adjacent to the main building with designated spaces for disabled visitors.",
  },
  {
    question: "What should I bring for my appointment?",
    answer:
      "Please bring your ID, insurance card, list of current medications, medical history, and any relevant test results or medical records.",
  },
  {
    question: "Do you offer telemedicine services?",
    answer:
      "Yes, we offer telemedicine consultations for certain types of appointments. You can schedule a virtual visit through our patient portal or by calling our office.",
  },
  {
    question: "What emergency services do you provide?",
    answer:
      "Our emergency department provides 24/7 care for all types of medical emergencies including trauma, cardiac care, stroke treatment, and pediatric emergencies.",
  },
  {
    question: "How can I access my medical records?",
    answer:
      "You can access your medical records through our secure patient portal, or request copies by contacting our medical records department with proper identification.",
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
    <div className="faqs-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="faqs-title">Health FAQs</h2>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="faqs-search-input"
      />
      <div className="faqs-list">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthFAQs;

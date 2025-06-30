import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import HealthFAQs from "./components/HealthFAQs";
import BookAppointment from "./components/BookAppointment";
import MedicationReminder from "./components/MedicationReminder";
import MentalHealthTips from "./components/MentalHealthTips";
import SymptomChecker from "./components/SymptomChecker";
import ChatbotSupport from "./components/ChatbotSupport";
import DoctorsInfo from "./components/DoctorsInfo";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [feature, setFeature] = useState(null); // 'faq', 'appointment', 'reminder', 'mental', 'symptom', 'chatbot', 'admin', 'admin_dashboard'
  const [admin, setAdmin] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleFeatureNav = (featureName) => {
    setFeature(featureName);
  };

  const handleBack = () => {
    setFeature(null);
    setSelectedDoctor(null);
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setFeature("appointment");
  };

  // Appointment data for demo (read from localStorage)
  const getAppointments = () => {
    try {
      return JSON.parse(localStorage.getItem("appointments")) || [];
    } catch {
      return [];
    }
  };

  const handleAdminLogin = (username, password) => {
    if (username === "Crystalcare" && password === "Crystalcare@#123") {
      setAdmin(true);
      setFeature("admin_dashboard");
    } else {
      return false;
    }
    return true;
  };

  const handleAdminLogout = () => {
    setAdmin(false);
    setFeature(null);
  };

  return (
    <div className="app-container">
      {!feature && (
        <LandingPage
          onFeatureNav={handleFeatureNav}
          onStartChat={() => setFeature("chatbot")}
        />
      )}
      {feature === "faq" && <HealthFAQs onBack={handleBack} />}
      {feature === "appointment" && (
        <BookAppointment onBack={handleBack} selectedDoctor={selectedDoctor} />
      )}
      {feature === "reminder" && <MedicationReminder onBack={handleBack} />}
      {feature === "mental" && <MentalHealthTips onBack={handleBack} />}
      {feature === "symptom" && <SymptomChecker onBack={handleBack} />}
      {feature === "doctors" && (
        <DoctorsInfo
          onBack={handleBack}
          onBookAppointment={handleBookAppointment}
        />
      )}
      {feature === "chatbot" && (
        <div className="chatbot-wrapper">
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
          <ChatbotSupport onBookAppointment={() => setFeature("appointment")} />
        </div>
      )}
      {feature === "admin" && !admin && (
        <AdminLogin onLogin={handleAdminLogin} />
      )}
      {feature === "admin_dashboard" && admin && (
        <AdminDashboard
          appointments={getAppointments()}
          onLogout={handleAdminLogout}
        />
      )}
    </div>
  );
}

export default App;

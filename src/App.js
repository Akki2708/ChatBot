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
    <div
      style={{
        minHeight: "100vh",
        background: "#181f2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleBack}
            style={{
              margin: 16,
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

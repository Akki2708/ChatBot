import React, { useState, useRef, useEffect } from "react";
import MedicationReminder from "./MedicationReminder";
import MentalHealthTips from "./MentalHealthTips";
import SymptomChecker from "./SymptomChecker";
import BookAppointment from "./BookAppointment";

const QUICK_ACTIONS = [
  { label: "Book Appointment", value: "book_appointment" },
  { label: "Contact Us", value: "contact_us" },
  { label: "Opening Hours", value: "opening_hours" },
  { label: "Doctors", value: "our_doctors" },
];

const FOLLOW_UP_SUGGESTIONS = [
  { label: "Check Symptoms", value: "symptom_checker" },
  { label: "Medication Reminder", value: "medication_reminder" },
  { label: "Mental Health Tips", value: "mental_health_tips" },
];

const SIDEBAR_SERVICES = [
  { label: "Medication Reminder", value: "medication" },
  { label: "Mental Health Tips", value: "mental" },
  { label: "Symptom Checker", value: "symptom" },
];

const APPOINTMENT_QUESTIONS = [
  {
    question: "Do you exercise routinely?",
    key: "exercise",
    options: ["Yes", "No"],
  },
  {
    question: "Are you allergic to any drugs?",
    key: "allergy",
    options: ["Yes", "No"],
  },
  {
    question: "Have you ever smoked?",
    key: "smoked",
    options: ["Yes", "No"],
  },
];

const BOT_AVATAR = process.env.PUBLIC_URL + "/logo.png";

const DOCTORS_LIST = [
  { name: "Dr. Priya Sharma", spec: "Cardiologist", time: "Mon-Fri 10am-2pm" },
  {
    name: "Dr. Rahul Mehta",
    spec: "Orthopedic Surgeon",
    time: "Mon-Sat 2pm-6pm",
  },
  { name: "Dr. Anjali Desai", spec: "Pediatrician", time: "Tue-Sat 9am-1pm" },
  {
    name: "Dr. Sameer Kulkarni",
    spec: "Dermatologist",
    time: "Mon, Wed, Fri 4pm-7pm",
  },
];

function ChatbotSupport() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [currentView, setCurrentView] = useState("chat");
  const [appointmentStep, setAppointmentStep] = useState(null); // null = not in flow, 0 = intro, 1/2/3 = questions
  const [appointmentAnswers, setAppointmentAnswers] = useState({});
  const chatEndRef = useRef(null);

  useEffect(() => {
    // On mount, greet the user
    setMessages([
      {
        from: "bot",
        name: "CrystalCare",
        avatar: BOT_AVATAR,
        text: "Hi! I'm CrystalCare, your virtual healthcare assistant. How may I help you today?",
        quickReplies: QUICK_ACTIONS,
      },
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // --- Appointment Flow Logic ---
  const startAppointmentFlow = () => {
    setAppointmentStep(0);
    setTyping(true);
    setLoading(true);
    setTimeout(() => {
      setTyping(false);
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          name: "CrystalCare",
          avatar: BOT_AVATAR,
          text: "I will be happy to help you book an appointment. Could you help me with a few details about your symptoms, so I can find you the right doctor? Please complete the steps below; it'll take just a minute.",
        },
      ]);
      setTimeout(() => askAppointmentQuestion(0), 1200);
    }, 1200);
  };

  const askAppointmentQuestion = (step) => {
    setAppointmentStep(step + 1);
    setTyping(true);
    setLoading(true);
    setTimeout(() => {
      setTyping(false);
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          name: "CrystalCare",
          avatar: BOT_AVATAR,
          text: APPOINTMENT_QUESTIONS[step].question,
          quickReplies: APPOINTMENT_QUESTIONS[step].options.map((o) => ({
            label: o,
            value: o,
          })),
        },
      ]);
    }, 1000);
  };

  const handleAppointmentAnswer = (answer) => {
    const stepIdx = appointmentStep - 1;
    setAppointmentAnswers((prev) => ({
      ...prev,
      [APPOINTMENT_QUESTIONS[stepIdx].key]: answer,
    }));
    setMessages((prev) => [
      ...prev,
      { from: "user", name: "You", avatar: BOT_AVATAR, text: answer },
    ]);
    if (appointmentStep < APPOINTMENT_QUESTIONS.length) {
      askAppointmentQuestion(appointmentStep);
    } else {
      // All questions answered, go to BookAppointment
      setTimeout(() => setCurrentView("book_appointment"), 1000);
    }
  };

  // --- General Chat Logic ---
  const handleUserMessage = (msg) => {
    if (!msg.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", name: "You", avatar: BOT_AVATAR, text: msg },
    ]);
    setInput("");
    setTyping(true);
    setLoading(true);
    setTimeout(() => {
      setTyping(false);
      setLoading(false);
      handleBotReply(msg);
    }, 1200 + Math.random() * 800); // 1.2–2s delay
  };

  const handleBotReply = (msg) => {
    let botText = "I'm here to help!";
    let quickReplies = QUICK_ACTIONS;
    if (/book|appoint/i.test(msg)) {
      startAppointmentFlow();
      return;
    } else if (/doctor|physician|our_doctors/i.test(msg)) {
      setTyping(true);
      setLoading(true);
      setTimeout(() => {
        setTyping(false);
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            name: "CrystalCare",
            avatar: BOT_AVATAR,
            text: "Here is our team of experienced doctors:",
          },
          ...DOCTORS_LIST.map((doc, idx) => ({
            from: "bot",
            name: doc.name,
            avatar: BOT_AVATAR,
            text: `Specialty: ${doc.spec}\nAvailable: ${doc.time}`,
            quickReplies: [
              { label: "Book Appointment", value: "book_appointment" },
            ],
          })),
        ]);
      }, 1000);
      return;
    } else if (/hour|open/i.test(msg) || /opening_hours/i.test(msg)) {
      setTyping(true);
      setLoading(true);
      setTimeout(() => {
        setTyping(false);
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            name: "CrystalCare",
            avatar: BOT_AVATAR,
            text: "Our hospital is open 24/7. Outpatient hours: Mon-Sat, 8am-8pm.",
            quickReplies: [
              { label: "Book Appointment", value: "book_appointment" },
              { label: "Contact Us", value: "contact_us" },
              { label: "Doctors", value: "our_doctors" },
            ],
          },
        ]);
      }, 1000);
      return;
    } else if (/contact/i.test(msg) || /contact_us/i.test(msg)) {
      setTyping(true);
      setLoading(true);
      setTimeout(() => {
        setTyping(false);
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            name: "CrystalCare",
            avatar: BOT_AVATAR,
            text: "Crystal Care Hospital, 123 Wellness Avenue, Healthy City. Phone: +1-555-HEALTH Email: info@crystalcare.com",
          },
        ]);
      }, 1200 + Math.random() * 800);
      return;
    } else if (/symptom/i.test(msg)) {
      botText = "Please describe your symptoms, and I'll try to help.";
    }
    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        name: "CrystalCare",
        avatar: BOT_AVATAR,
        text: botText,
        quickReplies,
        followUp: FOLLOW_UP_SUGGESTIONS,
      },
    ]);
  };

  const handleQuickReply = (value) => {
    if (appointmentStep) {
      handleAppointmentAnswer(value);
      return;
    }
    if (value === "book_appointment") {
      startAppointmentFlow();
      return;
    }
    if (value === "contact_us") {
      handleBotReply("contact_us");
      return;
    }
    if (value === "our_doctors" || value === "doctors") {
      handleBotReply("our_doctors");
      return;
    }
    if (value === "symptom_checker" || value === "symptom") {
      setCurrentView("symptom");
      return;
    }
    if (value === "medication") setCurrentView("medication");
    else if (value === "mental") setCurrentView("mental");
    else handleUserMessage(value.replace(/_/g, " "));
  };

  // Sidebar navigation
  const handleSidebar = (val) => setCurrentView(val);
  const handleBackToChat = () => setCurrentView("chat");

  // Render
  if (currentView === "book_appointment")
    return (
      <BookAppointment onBack={handleBackToChat} answers={appointmentAnswers} />
    );
  if (currentView === "medication")
    return <MedicationReminder onBack={handleBackToChat} />;
  if (currentView === "mental")
    return <MentalHealthTips onBack={handleBackToChat} />;
  if (currentView === "symptom")
    return <SymptomChecker onBack={handleBackToChat} />;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1 className="chatbot-title">CrystalCare Assistant</h1>
      </div>
      <div className="chatbot-main">
        <div className="chatbot-interface">
          <div className="chat-header">
            <img src={BOT_AVATAR} alt="CrystalCare" className="chat-avatar" />
            <div className="chat-title">CrystalCare Assistant</div>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === "user" ? "user" : "bot"}`}
              >
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="message-avatar"
                />
                <div className="message-content">
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>
                    {msg.name}
                  </div>
                  <div>{msg.text}</div>
                  {msg.quickReplies && (
                    <div
                      style={{
                        marginTop: 12,
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      {msg.quickReplies.map((qr, idx) => (
                        <button
                          key={idx}
                          className="btn chat-quick-action"
                          style={{
                            background:
                              "linear-gradient(90deg, #4f8cff 0%, #6a82fb 100%)",
                            color: "#fff",
                            fontWeight: 600,
                            border: "none",
                            borderRadius: 20,
                            padding: "0.6rem 1.4rem",
                            boxShadow: "0 2px 8px rgba(79,140,255,0.12)",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                          onClick={() => handleQuickReply(qr.value)}
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {msg.followUp && (
                    <div
                      style={{
                        marginTop: 8,
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      {msg.followUp.map((f, idx) => (
                        <button
                          key={idx}
                          className="btn btn-primary"
                          onClick={() => handleQuickReply(f.value)}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="message bot typing">
                <img
                  src={BOT_AVATAR}
                  alt="CrystalCare"
                  className="message-avatar"
                />
                <div className="message-content">
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#667eea",
                      marginBottom: 4,
                    }}
                  >
                    CrystalCare is typing...
                  </div>
                  <div className="typing-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input-container">
            <form
              className="chat-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleUserMessage(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
                disabled={loading || typing || appointmentStep}
              />
              <button
                type="submit"
                className="send-button"
                disabled={loading || typing || !input.trim() || appointmentStep}
              >
                <span role="img" aria-label="send">
                  ✈️
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="chat-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Health Services</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {SIDEBAR_SERVICES.map((s, idx) => (
                <button
                  key={idx}
                  className="btn btn-primary"
                  style={{ marginBottom: 4 }}
                  onClick={() => handleSidebar(s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">Quick Actions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {QUICK_ACTIONS.map((a, idx) => (
                <button
                  key={idx}
                  className="btn btn-secondary"
                  style={{ marginBottom: 4 }}
                  onClick={() => handleQuickReply(a.value)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotSupport;

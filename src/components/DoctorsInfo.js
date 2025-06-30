import React from "react";

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    photo: process.env.PUBLIC_URL + "/doctor2.png",
    desc: "Expert in heart health, preventive cardiology, and patient care with 15+ years of experience.",
    phone: "+1 (555) 123-4567",
    email: "dr.sharma@crystalcare.com",
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Orthopedic Surgeon",
    photo: process.env.PUBLIC_URL + "/doctor1.png",
    desc: "Specialist in bone and joint care, minimally invasive surgery, and sports injuries.",
    phone: "+1 (555) 123-4568",
    email: "dr.mehta@crystalcare.com",
  },
  {
    name: "Dr. Anjali Desai",
    specialty: "Pediatrician",
    photo: process.env.PUBLIC_URL + "/doctor3.png",
    desc: "Caring for children's health, growth, and development from newborns to teens.",
    phone: "+1 (555) 123-4569",
    email: "dr.desai@crystalcare.com",
  },
  {
    name: "Dr. Sameer Kulkarni",
    specialty: "Dermatologist",
    photo: process.env.PUBLIC_URL + "/doctor4.png",
    desc: "Skin, hair, and nail specialist with a focus on modern, evidence-based treatments.",
    phone: "+1 (555) 123-4570",
    email: "dr.kulkarni@crystalcare.com",
  },
];

function DoctorsInfo({ onBack, onBookAppointment }) {
  const handleBookAppointment = (doctor) => {
    // Navigate to BookAppointment component with selected doctor info
    if (onBookAppointment) {
      onBookAppointment(doctor);
    }
  };

  const handleContact = (doctor) => {
    // Show contact information
    alert(
      `Contact ${doctor.name}:\nPhone: ${doctor.phone}\nEmail: ${doctor.email}`
    );
  };

  return (
    <div className="doctors-container">
      <div className="doctors-header">
        <button
          className="btn btn-primary"
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1rem",
            padding: "12px 20px",
            borderRadius: "25px",
            marginBottom: "2rem",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>←</span>
          Back to Home
        </button>
        <h1 className="doctors-title">Our Expert Doctors</h1>
        <p className="doctors-subtitle">
          Meet our team of highly qualified and experienced medical
          professionals dedicated to your health and well-being.
        </p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doc, idx) => (
          <div className="doctor-card" key={idx}>
            <img src={doc.photo} alt={doc.name} className="doctor-image" />
            <div className="doctor-info">
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-specialty">{doc.specialty}</p>
              <p className="doctor-description">{doc.desc}</p>
              <div className="doctor-contact">
                <button
                  className="contact-btn primary"
                  onClick={() => handleBookAppointment(doc)}
                >
                  Book Appointment
                </button>
                <button
                  className="contact-btn secondary"
                  onClick={() => handleContact(doc)}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsInfo;

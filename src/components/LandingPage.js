import React, { useRef } from "react";

function LandingPage({ onFeatureNav, onStartChat }) {
  const aboutRef = useRef(null);
  const deptRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToDept = (e) => {
    e.preventDefault();
    deptRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src="/logo.png"
              alt="Crystal Care Hospital Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <span>CRYSTAL CARE</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleScrollToAbout}>
                About
              </a>
            </li>
            <li>
              <a href="#department" onClick={handleScrollToDept}>
                Department
              </a>
            </li>
            <li>
              <a href="#doctors" onClick={() => onFeatureNav("doctors")}>
                Doctors
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScrollToContact}>
                Contact
              </a>
            </li>
            <li>
              <a href="#admin" onClick={() => onFeatureNav("admin")}>
                Admin
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Making Health Care Better Together</h1>
          <p className="hero-subtitle">
            Welcome to Crystal Care Hospital. We bring you world-class
            healthcare with compassion and expertise. Our team is dedicated to
            making your health journey better, together.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={onStartChat}>
              Start Chat
            </button>
            <button className="btn btn-secondary" onClick={handleScrollToDept}>
              View Department
            </button>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏥</div>
            <h3 className="feature-title">About Crystal Care Hospital</h3>
            <p className="feature-description">
              Crystal Care Hospital is a leading healthcare institution
              dedicated to providing exceptional medical services with a
              patient-centric approach. Our team of highly qualified doctors,
              nurses, and staff are committed to delivering compassionate care,
              advanced diagnostics, and innovative treatments in a safe and
              welcoming environment.
            </p>
          </div>
        </div>
      </section>

      <section ref={deptRef} className="features-section">
        <h2
          className="text-center mb-3"
          style={{ fontSize: "2.5rem", color: "#333" }}
        >
          Our Departments & Specialties
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Cardiology</h3>
            <p className="feature-description">
              Expert heart care with advanced diagnostic and treatment
              facilities.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🦴</div>
            <h3 className="feature-title">Orthopedics</h3>
            <p className="feature-description">
              Comprehensive bone and joint care with modern surgical techniques.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👶</div>
            <h3 className="feature-title">Pediatrics</h3>
            <p className="feature-description">
              Specialized care for children with a child-friendly environment.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧴</div>
            <h3 className="feature-title">Dermatology</h3>
            <p className="feature-description">
              Advanced skin care treatments and cosmetic procedures.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="features-section">
        <h2
          className="text-center mb-3"
          style={{ fontSize: "2.5rem", color: "#333" }}
        >
          Contact Us
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📞</div>
            <h3 className="feature-title">Get in Touch</h3>
            <p className="feature-description">
              <strong>Phone:</strong> +1 (555) 123-4567
              <br />
              <strong>Email:</strong> info@crystalcarehospital.com
              <br />
              <strong>Address:</strong> 123 Wellness Avenue, Healthy City, State
              12345
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3 className="feature-title">Location</h3>
            <div style={{ marginTop: "1rem" }}>
              <iframe
                title="Crystal Care Hospital Location"
                src="https://www.google.com/maps?q=New+York+City+Hospital&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
